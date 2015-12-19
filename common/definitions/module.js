
const getRoute = require('../methods/module/getRoute.js');

module.exports = function(config){
  //Members
  this.name = config.name;
  this.tier = config.tier;

  //Methods
  this.listenOn = require('../methods/module/listenOn.js');

  this.channels = {
    out: new config.eventBase()
    ,in: config.parent.channels.out
  };


  //Process the Configured Routes
  for(var i=0; i<config.routes.length; i++){
    var route = config.routes[i];

    //Build a complete flatted list of all actions
    var routeActions = [];
    if(Array.isArray(route.actions)){
      for(var j=0; j<route.actions.length; j++){
        routeActions.concat(route.actions[j](this));
      }
    }
    else{
      routeActions = route.actions(this);
    }

    //Attach the actions to the event channel
    if(route.listenOn != undefined ||
    route.listenOn != null){
      for(var j=0; j<routeActions.length; j++){
        this.listenOn(route.eventName, route.listenOn, routeActions[j]);
      }
    }
    else{
      for(var j=0; j<routeActions.length; j++){
        this.listenOn(route.eventName, this.channels.out, routeActions[j]);
      }
    }
  }

  //Routing Method to process requests
  this.getRoute = function(request){
    //Get the first tier routing value
    return getRoute(request, this.tier);

  };

};
