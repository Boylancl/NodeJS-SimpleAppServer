
module.exports = function(instances, routes, actions, instanceName)
{
  var instance = instances[instanceName];

  for(var key in routes){

    if(routes.hasOwnProperty(key)
      && key in actions)
    {
      var route = routes[key];
      var action = actions[key];

      //Build a complete flatted list of all actions
      var routeActions = [];
      if(Array.isArray(action)){
        for(var j=0; j<action.length; j++){
          //Set Scope for the actions; Add to the list
          routeActions.concat(action[j](instance));
        }
      }
      else{
        routeActions = action(instance);
      }

      //Setup the instance with the correct actions
      instance.listenOn(route.listenFor, "in", routeActions);

      if(route.connectTo != null
      && route.connectTo != undefined)
      {
        //Route to externally
        var parent = instances[route.connectTo];

        //Set the parent with the correct route
        parent.listenOn(route.listenFor, "out", parent.buildTransmitter(instance, route.listenFor, "in"));
      }

    }
  }

}
