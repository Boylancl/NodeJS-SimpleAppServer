const urlHelp = require('url');

module.exports = function(request, channel, tier){
  if(tier == undefined || tier == null){
    tier = 0; //default
  }

  var routeValue = 'notFound';

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
  console.log(channel.listeners(routeValue).length);


  if(channel.listeners(routeValue).length < 1){
    routeValue = 'notFound';
  }

  return routeValue;

}
