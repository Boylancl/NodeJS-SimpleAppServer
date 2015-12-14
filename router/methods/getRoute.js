const urlHelp = require('url');

module.exports = function(request){
  var routeMethod = this.outBoundEvents['defaultApp'];

  var url = urlHelp.parse(request.url);

  var route = url.pathname.split('/');

  //Run through the pathname to find the first non-empty value
  for(var i=0; i<route.length; i++){
    if(route[i] != '' && route[i] != undefined){
      var routeId = route[i];

      if(routeId in this.outBoundEvents){
        routeMethod = this.outBoundEvents[routeId];
      }else {
        console.log('Warning! No Route found for %s', routeId);
      }
      break; //Stop after the first non-empty value
    }
  }

  return routeMethod;

}
