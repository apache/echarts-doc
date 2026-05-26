const { RawSource } = require('webpack-sources')
const path = require('path')
const fs = require('fs')

class SvgSpritePlugin {
  constructor({ spriteFilename = 'sprite-doc.svg', svgPath } = {}) {
    this.spriteFilename = spriteFilename
    this.svgPath = svgPath
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('SvgSpritePlugin', (compilation) => {
      const stage = compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
      compilation.hooks.processAssets.tap(
        { name: 'SvgSpritePlugin', stage },
        () => {
          if (!this.svgPath || !fs.existsSync(this.svgPath)) return

          const svgFiles = this._getSvgFiles(this.svgPath)
          if (compilation.contextDependencies && compilation.fileDependencies) {
            compilation.contextDependencies.add(this.svgPath)
            svgFiles.forEach((file) => compilation.fileDependencies.add(file))
          }

          const symbols = svgFiles
            .map((file) =>
              this._processSvg(file, fs.readFileSync(file, 'utf8')),
            )
            .filter(Boolean)

          // Assemble the final sprite content
          const content = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join('\n')}</svg>`
          // Emit the single sprite file to the build directory
          compilation.emitAsset(this.spriteFilename, new RawSource(content))
        },
      )
    })
  }

  // Recursively get all .svg files
  _getSvgFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const files = []
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...this._getSvgFiles(fullPath))
      } else if (entry.name.endsWith('.svg')) {
        files.push(fullPath)
      }
    }
    return files
  }

  _processSvg(filePath, rawSvg) {
    const id = path
      .basename(filePath, '.svg')
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')

    // Strip XML declaration, DOCTYPE and comments
    const svg = rawSvg
      .replace(/<\?xml[\s\S]*?\?>/g, '')
      .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
      .replace(/<!--([\s\S]*?)-->/g, '')

    // Extract viewBox (crucial for icon scaling)
    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/i)
    if (!viewBoxMatch) {
      console.warn(
        `Warning: SVG file '${filePath}' is missing a viewBox attribute. Skipping.`,
      )
      return null
    }

    return svg
      .replace(/<svg([^>]*)>/i, `<symbol id="${id}"$1>`) // <svg ...> -> <symbol id=... ...>
      .replace(/<\/svg>/i, '</symbol>') // </svg> -> </symbol>
      .replace(/\sxmlns(:\w+)?="[^"]*"/g, '') // Remove xmlns declarations
      .replace(/xlink:href/g, 'href') // xlink:href causes parse error and icons do not load
      .replace(/\s+/g, ' ') // Minify: collapse whitespace
      .replace(/>\s+</g, '><') // Minify: remove spaces between tags
      .trim()
  }
}

module.exports = SvgSpritePlugin
