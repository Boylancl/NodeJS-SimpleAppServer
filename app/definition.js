const moduleDef = require('../common/definitions/module.js');
const onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  moduleDef.call(this, config);

  const instance = this; //alias for this to ensure referenece in lamba funcs

  //override Routing info
  this.routes.inBoundEvents = {
    'default' : function(request,response){
        for(var i=0; i<onRequestStart.length; i++){
          onRequestStart[i].call(instance, request, response);
        }
      }
  };

  this.listenOn(this.routes.inBoundEvents, this.channels.in);
};
