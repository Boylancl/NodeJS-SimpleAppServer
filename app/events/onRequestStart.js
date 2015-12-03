const appEvents = require('../emitter.js');

module.exports = [
  //basic Log
  function(request, response){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(request, response){
    appEvents.emit('basic', request, response);

    //Send the Response to the Client
    response.end();
  }
];
