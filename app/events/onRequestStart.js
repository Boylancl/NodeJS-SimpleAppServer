const Event = require('../../Common/Classes/Event.js');

module.exports = function(channels){
  Event.call(this, "request", channels, [
    //basic Log
    function(){
      console.log("App Recieved Request!");
    }
    //Pass the request to the Basic Controller
    ,function(request, response){
      channels.out.emit('basic', request, response);

      //Send the Response to the Client
      response.end();
    }
  ]);
};
