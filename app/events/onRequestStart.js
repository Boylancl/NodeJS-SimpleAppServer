const appEvents = require('../emitter.js');
const routingLogic = require('../logic/routing.js');

module.exports = {

  EventName: "request"
  ,Handlers: [
    //basic Log
    function(request, response){
      console.log("App Recieved Request!");
    }
    //Pass the request to the Basic Controller
    ,function(request, response){

      //Parse the request to determine where it goes
      var route = routingLogic.getRoute(request);

      appEvents.emit('basic', request, response);

      //Send the Response to the Client
      response.end();
    }
  ]
};
