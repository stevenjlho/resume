require('./app.scss');
require('github-markdown-css');
var fullpage = require("fullpage");
var body = require('./body.js');


$(document).ready(function() {
  $('body').append(body).append('<a href="https://github.com/stevenjlho/resume"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/c6625ac1f3ee0a12250227cf83ce904423abf351/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"></a>');
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    scrollBar: true,
    responsiveWidth: '960px'
  });
});
