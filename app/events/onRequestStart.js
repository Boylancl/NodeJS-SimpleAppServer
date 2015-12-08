module.exports = [
  //basic Log
  function(){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(outChannel, request, response){
    outChannel.emit('basic', request, response);

    //Send the Response to the Client
    response.end();
  }
];
