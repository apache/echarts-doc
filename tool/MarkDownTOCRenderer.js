
function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = blank;

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

// Renderer.prototype.html = function(html) {
//   return html;
// };

Renderer.prototype.heading = function(text, level, raw) {
  var anchor = this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-');
  return '<h'
    + level
    + '>'
    + '<a href="#' + anchor + '">' + text + '</a>'
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = blank;

Renderer.prototype.list = blank;

Renderer.prototype.listitem = blank;

Renderer.prototype.paragraph = blank;

Renderer.prototype.table = blank;

Renderer.prototype.tablerow = blank;

Renderer.prototype.tablecell = blank;

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = blank;

Renderer.prototype.br = blank;

Renderer.prototype.del = blank;

Renderer.prototype.link = blank;

Renderer.prototype.image = blank;

Renderer.prototype.text = function(text) {
  return text;
};

function blank() {
    return '';
}

module.exports = Renderer;