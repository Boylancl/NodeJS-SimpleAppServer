const moduleDef = require('../common/definitions/module.js');
var onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  moduleDef.call(this, config);

  //Set variables and members
  this.server = config.server;
  var instance = this;

  //Set the in/out Event Handlers
  this.outBoundEvents = {
    'default' : function(request, response){
      instance.channels.out.emit('defaultApp', request, response);
    }
  };

  this.inBoundEvents = {
    'request' : function(request, response){
      //Hook act ions to process the request
      for(var i=0; i< onRequestStart.length; i++){
        onRequestStart[i].call(instance, request, response);
      }
    }
  };
  
  //Hook in Events to the in channel
  this.listenOn(this.inBoundEvents, this.channels.in);

  //Override module methods
  this.getRoute = function(){
    //Pull the default only (to be changed)
    return this.outBoundEvents['default'];
  };

  //Start Server
  this.server.listen(config.port, config.hostname);

};
