
module.exports = {
  EventName: "request"
  ,OutEvents: undefined
  ,Handlers: [
    //basic Log
    function(request, response){
      console.log("App Recieved Request!");
    }
    //Pass the request to the Basic Controller
    ,function(request, response){
      this.OutEvents.emit('basic', request, response);

      //Send the Response to the Client
      response.end();
    }
  ]
};
