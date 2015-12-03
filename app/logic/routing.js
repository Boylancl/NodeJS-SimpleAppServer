const urlUtils = require('url');

module.exports = {

  getRoute: function(request){
    var url = urlUtils.parse(request.url);

    var path = url.pathname.split('/');

    console.log(path);
  }
}
