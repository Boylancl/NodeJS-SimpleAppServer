const urlHelp = require('url');

module.exports = function(request, channel, tier){
  var routeValue = null;

  var url = urlHelp.parse(request.url);

  var route = url.pathname.split('/');

  //Run through the pathname to find the first non-empty value
  //Assume the first value in the route will be ''
  for(var i=tier+1; i<route.length; i++){
    if(route[i] != '' && route[i] != undefined){
      routeValue = route[i];
      break; //Stop after the first non-empty value
    }
  }

  if(channel.listeners(routeValue).length < 1){
    return undefined;
  }

  return routeValue;

}
