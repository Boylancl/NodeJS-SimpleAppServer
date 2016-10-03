const urlHelp = require('url');

module.exports = function(rawURL){

  var url = urlHelp.parse(rawURL);

  return url.pathname.split('/');

}
