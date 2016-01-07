
module.exports = function(instance, routes, channels, listenOn)
{
  //Process the Configured Routes
  for(var i=0; i<routes.length; i++){
    var route = routes[i];

    //Build a complete flatted list of all actions
    var routeActions = [];
    if(Array.isArray(route.actions)){
      for(var j=0; j<route.actions.length; j++){
        routeActions.concat(route.actions[j](instance));
      }
    }
    else{
      routeActions = route.actions(instance);
    }

    //Attach the actions to the event channel
    if(route.listenOn != undefined ||
    route.listenOn != null){
      listenOn(route.name
        ,channels[route.listenOn]
        ,routeActions);
    }
    else{
      //Defaults to the INFO channel of the module
      listenOn(route.name
        ,channels.info
        ,routeActions);
    }
  }
}
