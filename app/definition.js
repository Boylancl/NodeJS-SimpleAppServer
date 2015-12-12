const listenOn = require('../Common/eventMethods/listenOn.js');
const onRequestStart = require('./events/onRequestStart.js');

module.exports = function(config){
  const app = this; //alias for this to ensure referenece in lamba funcs

  this.channels = {
    out: new config.eventBase()
    ,in: config.parent.channels.out
  };

  //Define the event handlers
  this.inBoundEvents = {
    'request' : function(request,response){
        for(var i=0; i<onRequestStart.length; i++){
          onRequestStart[i].call(app, request, response);
        }
      }
  };

  listenOn(this.inBoundEvents, this.channels.in);
};
