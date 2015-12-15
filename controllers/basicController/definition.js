const moduleDef = require('../../common/class/module.js');
const onBasicRequest = require('./events/onBasicRequest.js');

module.exports = function(config){
  moduleDef.call(this, config);
  const instance = this; //alias for this to ensure referenece in lamba funcs

  //Define the event handlers
  this.inBoundEvents = {
    'defaultController' : function(request,response){
        for(var i=0; i<onBasicRequest.length; i++){
          onBasicRequest[i].call(instance, request, response);
        }
      }
  };

  this.listenOn(this.inBoundEvents, this.channels.in);
};
