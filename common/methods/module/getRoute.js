const urlHelp = require('url');

module.exports = function(request, routeTable, tier){
  if(tier == undefined || tier == null){
    tier = 0; //default
  }

  var routeValue;

  var url = urlHelp.parse(request.url);

  var route = url.pathname.split('/');

  //Run through the pathname to find the first non-empty value
  //Assume the first value in the route will be ''
  for(var i=tier+1; i<route.length; i++){
    if(route[i] != '' && route[i] != undefined){
      var routeId = route[i];

      if(routeId in routeTable){
        routeValue = routeTable[routeId];
      }else {
        console.log('Warning! No Route found for %s', routeId);
      }
      break; //Stop after the first non-empty value
    }
  }

  return routeValue;

}
