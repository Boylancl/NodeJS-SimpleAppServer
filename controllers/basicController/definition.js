const moduleDef = require('../../common/definitions/module.js');
const onBasicRequest = require('./events/onBasicRequest.js');


module.exports = function(config){
  moduleDef.call(this, config);
  const instance = this; //alias for this to ensure referenece in lamba funcs

  //override Routing info
  this.routes.inBoundEvents = {
    'default' : function(request,response){
      for(var i=0; i<onBasicRequest.length; i++){
        onBasicRequest[i].call(instance, request, response);
      }
    }
  };

  this.listenOn(this.routes.inBoundEvents, this.channels.in);
};
