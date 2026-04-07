/**
 * Converts built part JSONs (HTML desc) to Markdown using turndown,
 * and generates llms.txt + individual .md files.
 *
 * Mechanically converts documents/*-parts/*.json to llms-documents/ (.md files).
 * Root files (e.g. option.md) are placed at llms-documents/, while part files
 * (e.g. option.title.md) are placed at llms-documents/*-parts/.
 * Type information is extracted from documents/*.json (full schema) via traverse.
 *
 * Prerequisites: JSON must be built first (node build.js --env dev)
 * Usage: node build/build-llms.js --env dev
 */
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const globby = require('globby');
const TurndownService = require('turndown');
const {gfm} = require('turndown-plugin-gfm');
const {traverse} = require('../tool/schemaHelper');
const {readConfigEnvFile} = require('./helper');

// --- Constants ---

const LANGUAGES = ['en', 'zh'];
const OUTPUT_DIR_NAME = 'llms-documents';
const MAX_HEADING_DEPTH = 6;

const SECTION_LABELS = {
    en: {'option-parts': 'Option', 'option-gl-parts': 'Option GL', 'api-parts': 'API', 'tutorial-parts': 'Tutorial'},
    zh: {'option-parts': '配置项 (Option)', 'option-gl-parts': 'GL配置项 (Option GL)', 'api-parts': 'API', 'tutorial-parts': '教程 (Tutorial)'}
};

const LLMS_TXT_HEADER = [
    '# Apache ECharts Documentation',
    '',
    '> Apache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts to your commercial products.',
    ''
].join('\n');

// --- Config ---

const argv = require('yargs').argv;
const envType = (argv.dev != null || argv.debug != null || argv.env === 'dev') ? 'dev' : argv.env;
if (!envType) throw new Error('--env MUST be specified');
const config = readConfigEnvFile(envType);

// --- Turndown ---

const td = new TurndownService({headingStyle: 'atx', codeBlockStyle: 'fenced'});
td.use(gfm);
td.addRule('iframe', {filter: 'iframe', replacement: () => ''});

function htmlToMd(html) {
    return html ? td.turndown(html).replace(/\n{3,}/g, '\n\n').trim() : '';
}

// --- Extract type info from full schema JSON ---

/**
 * Extract type and default value info from a full schema JSON by traversing
 * the nested schema tree.
 *
 * @param {string} schemaJsonPath - path to schema JSON (e.g. "documents/option.json")
 * @param {string} docName - e.g. "option", "api"
 * @returns {Object<string, {type: string|null, default: string|null}>}
 *   e.g. { "option.title.show": {type: "boolean", default: "true"} }
 */
function buildTypeMap(schemaJsonPath, docName) {
    if (docName === 'tutorial' || !fs.existsSync(schemaJsonPath)) return {};
    const schema = JSON.parse(fs.readFileSync(schemaJsonPath, 'utf-8'));
    const typeMap = {};
    traverse(schema, docName, (schemaPath, node) => {
        if (node.type || node.default != null) {
            typeMap[schemaPath] = {
                type: node.type ? (Array.isArray(node.type) ? node.type.join('|') : node.type) : null,
                default: node.default != null
                    ? (typeof node.default === 'object' ? JSON.stringify(node.default) : String(node.default))
                    : null
            };
        }
    });
    return typeMap;
}

// --- Resolve links in HTML ---
// Best-effort rewriting of <a href="#path"> and <a href="api.html#path"> in HTML
// so that turndown produces markdown links pointing to the correct .md files.
// Some source links have non-standard formats (e.g. missing "#", no dot separator)
// that cannot be resolved; these are left as-is or linked to the root file.

/**
 * Split linkPath into a part key (first segment) and fragment (rest), matching
 * the key against partKeys with case-insensitive and singular/plural fallback.
 *
 * @param {string} linkPath - e.g. "title.show", "echarts.init"
 * @param {Set<string>} partKeys - e.g. Set{'title','series-bar','geo',...}
 * @returns {{key: string, frag: string|null}|null}
 *   e.g. "title.show"                    -> {key: "title", frag: "show"}
 *        "angleAxis.axisLabel.interval"  -> {key: "angleAxis", frag: "axisLabel.interval"}
 *        "geo"                           -> {key: "geo", frag: null}
 *        "unknown"                       -> null
 */
function tryResolvePartKey(linkPath, partKeys) {
    const [seg, ...rest] = linkPath.split('.');
    const frag = rest.length > 0 ? rest.join('.') : null;

    if (partKeys.has(seg)) return {key: seg, frag};

    // Fallback: case-insensitive and singular/plural matching
    const segL = seg.toLowerCase();
    for (const k of partKeys) {
        if (k.toLowerCase() === segL) return {key: k, frag};
    }
    for (const k of partKeys) {
        const kl = k.toLowerCase();
        if (kl === segL + 's' || kl + 's' === segL) return {key: k, frag};
    }
    return null;
}

/**
 * Resolve a link path to an href pointing to the correct .md file.
 * If partKeys contains a match, link to the individual part file;
 * otherwise fall back to the root file.
 *
 * @param {string} linkPath - e.g. "title.show", "visualMap"
 * @param {Set<string>} partKeys - keys of individual part files
 * @param {string} pathPrefix - path prefix for part files
 *   from part: "option"                -> "option.title.md"
 *   from root: "option-parts/option"   -> "option-parts/option.title.md"
 *   cross-doc: "../api-parts/api"      -> "../api-parts/api.echarts.md"
 * @param {string} rootPath - path prefix for root file fallback
 *   from part: "../option"  -> "../option.md#visualMap"
 *   from root: "option"     -> "option.md#visualMap"
 *   cross-doc: "../api"     -> "../api.md#events"
 * @returns {string} resolved href attribute string
 */
function resolveLink(linkPath, partKeys, pathPrefix, rootPath) {
    const resolved = tryResolvePartKey(linkPath, partKeys);
    if (!resolved) {
        return `href="${rootPath}.md#${linkPath}"`;
    }
    return `href="${pathPrefix}.${resolved.key}.md${resolved.frag ? '#' + resolved.frag : ''}"`;
}

/**
 * Rewrite internal links and image paths in HTML before turndown conversion.
 * Handles three patterns:
 *   1. Same-doc:  href="#title.show"            -> href="option.title.md#show"
 *   2. Cross-doc: href="api.html#echarts.init"  -> href="../api-parts/api.echarts.md#init"
 *   3. Images:    src="documents/asset/img/..." -> src="../../documents/asset/img/..."
 * Unresolvable links fall back to the root file.
 *
 * @param {string} html - HTML string containing <a href="..."> links
 * @param {Object<string, Set<string>>} partKeysByDoc - part keys for all docs
 * @param {string} docName - current doc name (e.g. "option")
 * @param {boolean} isRoot - whether the current file is a root file
 * @returns {string} HTML with rewritten href attributes and image paths
 */
function tryResolveHtmlLinks(html, partKeysByDoc, docName, isRoot) {
    const partKeys = partKeysByDoc[docName];
    // Path prefixes differ depending on whether current file is root or part:
    //   root (llms-documents/option.md)              -> part: "option-parts/option", root: "option"
    //   part (llms-documents/option-parts/option.*.md) -> part: "option",            root: "../option"
    const sameDocPartPrefix = isRoot ? `${docName}-parts/${docName}` : docName;
    const sameDocRootPath = isRoot ? docName : `../${docName}`;
    const crossDocPrefix = isRoot ? '' : '../';

    // Same-doc links: href="#title.show" -> href="option.title.md#show"
    const resolved = html.replace(/href="#([^"]+)"/g, (match, linkPath) =>
        partKeys ? resolveLink(linkPath, partKeys, sameDocPartPrefix, sameDocRootPath) : match
    );

    // Cross-doc links: href="api.html#echarts.init" -> href="../api-parts/api.echarts.md#init"
    const crossResolved = resolved.replace(
        /href="(option-gl|option|api|tutorial)\.html#([^"]+)"/g,
        (match, targetDoc, fragment) => {
            const keys = partKeysByDoc[targetDoc];
            if (!keys) return match;
            return resolveLink(fragment, keys, `${crossDocPrefix}${targetDoc}-parts/${targetDoc}`, `${crossDocPrefix}${targetDoc}`);
        }
    );

    // Image paths: src="documents/asset/..." -> relative path to public/{lang}/documents/asset/
    const imgPrefix = isRoot ? '../' : '../../';
    return crossResolved.replace(
        /src="(documents\/asset\/[^"]*)"/g,
        (_, src) => `src="${imgPrefix}${src}"`
    );
}

// --- Convert part JSON to Markdown ---

function formatPropertyEntry(key, entry, typeInfo, linkResolver) {
    const heading = '#'.repeat(Math.min(key.split('.').length + 1, MAX_HEADING_DEPTH)) + ' ' + key;
    const meta = [
        typeInfo && typeInfo.type && `- **Type**: \`${typeInfo.type}\``,
        typeInfo && typeInfo.default != null && `- **Default**: \`${typeInfo.default}\``
    ].filter(Boolean);
    const body = entry.desc ? htmlToMd(linkResolver(entry.desc)) : '';
    return [heading, ...meta, ...(body ? ['', body] : []), ''];
}

function jsonToMd(data, typeMap, baseName, linkResolver) {
    const lines = Object.entries(data).flatMap(([key, entry]) => {
        const fullKey = baseName ? `${baseName}.${key}` : key;
        return formatPropertyEntry(key, entry, typeMap[fullKey], linkResolver);
    });
    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

// --- Collect part JSON files ---

/**
 * Collect part JSON files for each *-parts/ directory, excluding outline files.
 *
 * @param {string[]} partsDirs - paths to *-parts/ directories
 * @returns {Object<string, string[]>} dir path -> JSON file paths
 */
function collectPartJsonFiles(partsDirs) {
    const jsonFilesByDir = {};
    for (const dir of partsDirs) {
        jsonFilesByDir[dir] = globby.sync('*.json', { cwd: dir, absolute: true })
            .filter(filePath => !path.basename(filePath).includes('-outline'));
    }
    return jsonFilesByDir;
}

// --- Collect file keys for link resolution across docs ---

/**
 * Build a map of doc name -> Set of part keys for all *-parts/ directories.
 * Part keys are file names with the doc name stripped (e.g. "option.title" -> "title").
 * Root files (e.g. "option.json") are excluded since they are not individual part files.
 *
 * @param {string[]} partsDirs - paths to *-parts/ directories
 * @param {Object<string, string[]>} jsonFilesByDir - pre-collected JSON file paths
 * @returns {Object<string, Set<string>>} partKeysByDoc - e.g. { option: Set{'title','geo',...}, api: Set{'echarts',...} }
 */
function buildPartKeysByDoc(partsDirs, jsonFilesByDir) {
    const partKeysByDoc = {};
    for (const dir of partsDirs) {
        const docName = path.basename(dir).replace(/-parts$/, '');
        partKeysByDoc[docName] = new Set(
            jsonFilesByDir[dir].map(filePath => path.basename(filePath, '.json'))
                .filter(k => k !== docName)
                .map(k => k.startsWith(docName + '.') ? k.slice(docName.length + 1) : k)
        );
    }
    return partKeysByDoc;
}

// --- Process a single *-parts/ directory ---

/**
 * Convert part JSON files in a single *-parts/ directory to Markdown.
 * Each JSON file becomes a .md file with resolved links and type info.
 * Root files (e.g. option.json) are output to the parent directory.
 *
 * @param {string} partsDir - path to a *-parts/ directory (e.g. "documents/option-parts")
 * @param {string} outDir - output base directory (e.g. "llms-documents")
 * @param {Object} typeMap - property path -> {type, default} map
 * @param {Object<string, Set<string>>} partKeysByDoc - part keys for all docs
 * @param {string[]} jsonFiles - pre-collected JSON file paths for this directory
 * @returns {{name: string, path: string, section: string}[]} output file descriptors
 */
function processPartsDir(partsDir, outDir, typeMap, partKeysByDoc, jsonFiles) {
    const dirName = path.basename(partsDir);
    const docName = dirName.replace(/-parts$/, '');

    return jsonFiles.map(filePath => {
        const baseName = path.basename(filePath, '.json');
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const isRoot = baseName === docName;
        const linkResolver = (html) => tryResolveHtmlLinks(html, partKeysByDoc, docName, isRoot);
        const content = `# ${baseName}\n\n` + jsonToMd(data, typeMap, baseName, linkResolver);
        const fileName = isRoot ? `${baseName}.md` : `${dirName}/${baseName}.md`;
        const fullPath = path.resolve(outDir, fileName);
        fse.ensureDirSync(path.dirname(fullPath));
        fs.writeFileSync(fullPath, content, 'utf-8');
        return {name: fileName, path: fullPath, section: dirName};
    });
}

// --- Generate docs for a single language ---

function generateDocsForLang(lang) {
    const docsDir = path.resolve(config.releaseDestDir, lang, 'documents');
    const outDir = path.resolve(config.releaseDestDir, lang, OUTPUT_DIR_NAME);
    fse.ensureDirSync(outDir);

    // Step 1: Build a type map from full schema JSONs (option.json, api.json, etc.)
    //         by traversing the nested schema tree to collect type/default for each
    //         property path (e.g. "option.title.show" -> {type: "boolean", default: "true"}).
    const schemaFiles = globby.sync('*.json', { cwd: docsDir, absolute: true });
    const typeMap = {};
    for (const filePath of schemaFiles) {
        Object.assign(typeMap, buildTypeMap(filePath, path.basename(filePath, '.json')));
    }

    // Step 2: Collect part JSON files and file keys for all *-parts/ directories upfront,
    //         so that cross-doc links can be resolved against actual files.
    const partsDirs = globby.sync('*-parts', {
        cwd: docsDir,
        absolute: true,
        onlyDirectories: true
    });
    const jsonFilesByDir = collectPartJsonFiles(partsDirs);
    const partKeysByDoc = buildPartKeysByDoc(partsDirs, jsonFilesByDir);

    // Step 3: For each *-parts/ directory, read part JSONs (e.g. option.title.json),
    //         resolve internal links in HTML, convert desc to Markdown via turndown,
    //         attach type/default from the type map, and write as .md files.
    const files = partsDirs
        .flatMap(dir => processPartsDir(dir, outDir, typeMap, partKeysByDoc, jsonFilesByDir[dir]))
        .sort((a, b) => a.name.localeCompare(b.name));

    console.log(`Generated ${files.length} docs for ${lang}`);
    return files;
}

// --- llms.txt ---

function writeLlmsTxt(lang, files) {
    const langDir = path.resolve(config.releaseDestDir, lang);
    fse.ensureDirSync(langDir);
    const labels = SECTION_LABELS[lang] || SECTION_LABELS.en;
    const groups = {};
    for (const file of files) {
        if (!groups[file.section]) groups[file.section] = [];
        groups[file.section].push(file);
    }

    const sections = Object.keys(groups)
        .sort()
        .flatMap(sectionKey => [
            `## ${labels[sectionKey] || sectionKey}`, '',
            ...groups[sectionKey]
                .sort((a, b) => {
                    const aIsRoot = !a.name.includes('/');
                    const bIsRoot = !b.name.includes('/');
                    if (aIsRoot !== bIsRoot) return aIsRoot ? -1 : 1;
                    return a.name.localeCompare(b.name);
                })
                .map(file =>
                    `- [${path.basename(file.name, '.md')}](${OUTPUT_DIR_NAME}/${file.name})`
                ),
            ''
        ]);

    const content = [LLMS_TXT_HEADER, ...sections].join('\n').trimEnd() + '\n';
    fs.writeFileSync(path.join(langDir, 'llms.txt'), content, 'utf-8');
    console.log(`Generated ${lang}/llms.txt`);
}

// --- Main ---

function buildLlms() {
    console.log('Building llms documents ...');
    for (const lang of LANGUAGES) {
        // Step 1-2: Generate individual .md files from part JSONs.
        const files = generateDocsForLang(lang);
        // Step 3: Generate llms.txt index listing all .md files.
        if (files.length > 0) writeLlmsTxt(lang, files);
    }
    console.log('Build llms documents done.');
}

module.exports = buildLlms;
if (require.main === module) buildLlms();
