const listenOn = require('../methods/module/listenOn.js');
const getRoute = require('../methods/module/getRoute.js');

module.exports = function(config){

  this.routingTier = 0;

  this.channels = {
    out: new config.eventBase()
    ,in: config.parent.channels.out
  };

  this.listenOn = listenOn;

  //Routing Method to process requests
  this.getRoute = function(request){
    //Get the first tier routing value
    var routingMethod = getRoute(request
      ,this.outBoundEvents, this.routingTier);

    if(routingMethod == undefined || routingMethod == null){
      routingMethod = this.outBoundEvents['default'];
    }

    return routingMethod;
  };

};
