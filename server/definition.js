const moduleDef = require('../common/definitions/module.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  moduleDef.call(this, config);

  //Set variables and members
  this.server = config.server;
  var instance = this;

  //override Routing info
  this.routes.in = {
    'request' : function(request, response){
      //Hook actions to process the request
      for(var i=0; i< onRequestStart.length; i++){
        onRequestStart[i].call(instance, request, response);
      }
    }
  };

  //Hook the in route to the in channel
  this.listenOn(this.routes.in, this.channels.in);

  //Start Server
  this.server.listen(config.port, config.hostname);

};
