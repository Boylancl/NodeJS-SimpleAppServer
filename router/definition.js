const moduleDef = require('../common/class/module.js');
const onRequest = require('./events/onRequest.js');

module.exports = function(config){
  moduleDef.call(this, config);

  var instance = this;

  this.outBoundEvents = {
    'default' : function(request, response){
      instance.channels.out.emit('defaultApp', request, response);
    }
  };

  this.inBoundEvents = {
    'request' : function(request, response){
      for(var i=0; i<onRequest.length; i++){
        onRequest[i].call(instance, request, response);
      }
    }
  };

  this.listenOn(this.inBoundEvents, this.channels.in);
}
