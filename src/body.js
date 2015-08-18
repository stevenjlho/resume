var content = require('./content.js');
var bodyHtml = '';

if(!$.isEmptyObject(content)) {
  $.each(content, function(key, val) {
      bodyHtml+= '<div class="section"><div class="markdown-body content">'+val+'</div></div>';
  });
}

bodyHtml = '<div id="fullpage">'+bodyHtml+'</div>';


module.exports = bodyHtml;
