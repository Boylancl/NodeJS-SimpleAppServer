const listenOn = require('../methods/module/listenOn.js');
const getRoute = require('../methods/module/getRoute.js');

module.exports = function(config){
  this.name = config.name;

  this.channels = {
    out: new config.eventBase()
    ,in: config.parent.channels.out
  };

  this.tier = config.tier;

  const instance = this;


  this.routes =
  {
    'NotFound': function(request, response){
        instance.channels.out.emit('NotFound', request, response);
    }
    ,'request': function(request,response){
        console.log('Request caught in Name/Tier : %s/%s'
          ,instance.name, instance.routes.tier);
      }
  }

  this.listenOn = listenOn;

  //Routing Method to process requests
  this.getRoute = function(request){
    //Get the first tier routing value
    var routingMethod = getRoute(request
      ,this.routes, this.tier);

    if(routingMethod == undefined || routingMethod == null){
      routingMethod = this.routes['NotFound'];
    }

    return routingMethod;
  };

};
