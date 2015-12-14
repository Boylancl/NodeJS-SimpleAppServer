const moduleDef = require('../common/class/module.js');
const onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  moduleDef.call(this, config);

  const instance = this; //alias for this to ensure referenece in lamba funcs

  //Define the event handlers
  this.inBoundEvents = {
    'defaultApp' : function(request,response){
        for(var i=0; i<onRequestStart.length; i++){
          onRequestStart[i].call(instance, request, response);
        }
      }
  };

  this.listenOn(this.inBoundEvents, this.channels.in);
};
