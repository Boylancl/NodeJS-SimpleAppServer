const buildRouteActions = require('./buildRouteActions');
const buildTransmitter = require('./buildTransmitter');

module.exports = function(instances, routes, actions, instanceName){
  //Find the Instances in the Bag provided
  var scope = instances[instanceName];

  //Run through all the defined routes
  for(var key in actions){
    var action = actions[key];

    //Build a complete flatted list of all actions
    var routeActions = buildRouteActions(scope, action);

    //Check that route has defined actions
    if((routes!=null || routes!=undefined)
      && routes.hasOwnProperty(key))
    {
      var route = routes[key];

      //Build the transmitter connecting to another instance
      if(route.connectTo != null
      && route.connectTo != undefined)
      {
        //Route to externally
        var reciever = instances[route.connectTo];

        var transmitter = buildTransmitter(scope, reciever, route.execute);
        //Add the transmitter to the end of the actions list
        routeActions.push(transmitter);
      }
    }

    scope.listenOn(scope.name, key, routeActions);

  }

}
