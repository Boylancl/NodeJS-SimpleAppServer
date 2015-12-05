//Private
//members
const eventName = "request";
var outEvents = undefined;
var handlers = [
  //basic Log
  function(request, response){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(request, response){

    outEvents.emit('basic', request, response);

    //Send the Response to the Client
    response.end();
  }
];


//Public
module.exports = {
  //Methods
  Init: function(app){
    //Bind all the OnRequest Functions to the Server
    for(var i=0; i<handlers.length; i++){
      app.InEvents.on(eventName, handlers[i]);
    }

    outEvents = app.OutEvents;
  }
};
