/**
 * Converts built part JSONs (HTML desc) to Markdown using turndown,
 * and generates llms.txt + individual .md files.
 *
 * Mechanically converts documents/*-parts/*.json to llms-documents/*-parts/*.md.
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

const CATEGORY_LABELS = {
    en: {'option-parts': 'Option', 'option-gl-parts': 'Option GL', 'api-parts': 'API', 'tutorial-parts': 'Tutorial'},
    zh: {'option-parts': '配置项 (Option)', 'option-gl-parts': 'Option GL', 'api-parts': 'API', 'tutorial-parts': '教程 (Tutorial)'}
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

function buildTypeMap(schemaJsonPath, docName) {
    if (!fs.existsSync(schemaJsonPath)) return {};
    const schema = JSON.parse(fs.readFileSync(schemaJsonPath, 'utf-8'));
    const typeMap = {};
    traverse(schema, docName, (schemaPath, node) => {
        if (node.type || node.default != null) {
            typeMap[schemaPath] = {
                type: node.type ? (Array.isArray(node.type) ? node.type.join('|') : node.type) : null,
                default: node.default != null ? String(node.default) : null
            };
        }
    });
    return typeMap;
}

// --- Resolve links in HTML ---
// Best-effort rewriting of <a href="#path"> and <a href="api.html#path"> in HTML
// so that turndown produces markdown links pointing to the correct .md files.
// Some source links have non-standard formats (e.g. missing "#", no dot separator)
// that cannot be resolved; these are left as-is or linked to the orphan file.

function tryResolveFileKey(linkPath, fileKeys) {
    const [seg, ...rest] = linkPath.split('.');
    const frag = rest.length > 0 ? rest.join('.') : null;
    const segL = seg.toLowerCase();
    const keysArr = [...fileKeys];

    const key = fileKeys.has(seg)
        ? seg
        : keysArr.find(k => k.toLowerCase() === segL)
            ?? keysArr.find(k => {
                const kl = k.toLowerCase();
                return kl === segL + 's' || kl + 's' === segL;
            })
            ?? null;

    return key ? {key, frag} : null;
}

function tryResolveHtmlLinks(html, strippedKeys, docPrefix, hasOrphanFile) {
    // Same-category links: href="#property.path" -> href="docPrefix.fileKey.md#fragment"
    const resolved = html.replace(/href="#([^"]+)"/g, (match, lp) => {
        const r = tryResolveFileKey(lp, strippedKeys);
        if (!r) {
            if (hasOrphanFile) return `href="${docPrefix}.md#${lp}"`;
            return match;
        }
        return `href="${docPrefix}.${r.key}.md${r.frag ? '#' + r.frag : ''}"`;
    });

    // Cross-category links: href="api.html#echarts.init" -> href="../api-parts/api.echarts.md#init"
    // Tutorial is a single file, so href="tutorial.html#X" -> href="../tutorial-parts/tutorial.md#X"
    return resolved.replace(
        /href="(option|api|tutorial)\.html#([^"]+)"/g,
        (_, docType, fragment) => {
            if (docType === 'tutorial') {
                return `href="../tutorial-parts/tutorial.md#${fragment}"`;
            }
            const {key, frag} = tryResolveFileKey(fragment, new Set([fragment.split('.')[0]]));
            return `href="../${docType}-parts/${docType}.${key}.md${frag ? '#' + frag : ''}"`;
        }
    );
}

// --- Convert part JSON to Markdown ---

function formatPropertyEntry(key, val, typeInfo, linkResolver) {
    const heading = '#'.repeat(Math.min(key.split('.').length + 1, MAX_HEADING_DEPTH)) + ' ' + key;
    const meta = [
        typeInfo && typeInfo.type && `- **Type**: \`${typeInfo.type}\``,
        typeInfo && typeInfo.default != null && `- **Default**: \`${typeInfo.default}\``
    ].filter(Boolean);
    const body = val.desc ? htmlToMd(linkResolver(val.desc)) : '';
    return [heading, ...meta, ...(body ? ['', body] : []), ''];
}

function jsonToMd(data, typeMap, partKey, linkResolver) {
    const lines = Object.entries(data).flatMap(([key, val]) => {
        const fullKey = partKey ? `${partKey}.${key}` : key;
        return formatPropertyEntry(key, val, typeMap[fullKey], linkResolver);
    });
    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

// --- File output ---

function writeFile(dir, name, content, category) {
    const fullPath = path.resolve(dir, name);
    fse.ensureDirSync(path.dirname(fullPath));
    fs.writeFileSync(fullPath, content, 'utf-8');
    return {name, path: fullPath, category};
}

// --- Process a single *-parts/ directory ---

function processPartsDir(partsDir, outDir, typeMap) {
    const dirName = path.basename(partsDir);
    const docPrefix = dirName.replace(/-parts$/, '');

    const jsonFiles = globby.sync(path.join(partsDir, '*.json'))
        .filter(f => !path.basename(f).includes('-outline'));

    // Collect file keys for link resolution (e.g. "option.title", "option.series-bar")
    const fileKeys = new Set(jsonFiles.map(f => path.basename(f, '.json')));
    const strippedKeys = new Set([...fileKeys].map(k =>
        k.startsWith(docPrefix + '.') ? k.slice(docPrefix.length + 1) : k
    ));
    const hasOrphanFile = fileKeys.has(docPrefix);

    // Create a link resolver that rewrites HTML hrefs before turndown
    const linkResolver = (html) => tryResolveHtmlLinks(html, strippedKeys, docPrefix, hasOrphanFile);

    return jsonFiles.map(f => {
        const baseName = path.basename(f, '.json');
        const data = JSON.parse(fs.readFileSync(f, 'utf-8'));
        const content = `# ${baseName}\n\n` + jsonToMd(data, typeMap, baseName, linkResolver);
        return writeFile(outDir, `${dirName}/${baseName}.md`, content, dirName);
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
    const schemaFiles = globby.sync(path.join(docsDir, '*.json'));
    const typeMap = schemaFiles.reduce((map, f) => {
        const docName = path.basename(f, '.json');
        return {...map, ...buildTypeMap(f, docName)};
    }, {});

    // Step 2: For each *-parts/ directory, read part JSONs (e.g. option.title.json),
    //         resolve internal links in HTML, convert desc to Markdown via turndown,
    //         attach type/default from the type map, and write as .md files.
    const partsDirs = globby.sync(path.join(docsDir, '*-parts'), {onlyDirectories: true});
    const files = partsDirs
        .flatMap(dir => processPartsDir(dir, outDir, typeMap))
        .sort((a, b) => a.name.localeCompare(b.name));

    console.log(`Generated ${files.length} docs for ${lang}`);
    return files;
}

// --- llms.txt ---

function groupByCategory(files) {
    return files.reduce((groups, f) => ({
        ...groups,
        [f.category]: [...(groups[f.category] || []), f]
    }), {});
}

function writeLlmsTxt(lang, files) {
    const langDir = path.resolve(config.releaseDestDir, lang);
    fse.ensureDirSync(langDir);
    const labels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.en;
    const groups = groupByCategory(files);

    const sections = Object.keys(groups)
        .sort()
        .flatMap(cat => [
            `## ${labels[cat] || cat}`, '',
            ...groups[cat].map(f =>
                `- [${path.basename(f.name, '.md')}](${OUTPUT_DIR_NAME}/${f.name})`
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
