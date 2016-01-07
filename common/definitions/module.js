
const getRoute = require('../methods/module/getRoute.js');
const wireRoutes = require('../methods/module/wireRoutes.js');
const listenOn = require('../methods/module/listenOn.js');

module.exports = function(config){
  //Members
  this.name = config.name;
  this.tier = config.tier;

  this.channels = config.channels;
  //Add the module Default channels
  this.channels.out = new config.eventBase();
  this.channels.error = new config.eventBase();
  this.channels.warning = new config.eventBase();
  this.channels.info = new config.eventBase();

  wireRoutes(this, config.routes, this.channels, listenOn);

  //Routing Method to process requests
  this.getRoute = function(request, channel){
    //Get the first tier routing value
    return getRoute(request, channel, this.tier);
  };

};
