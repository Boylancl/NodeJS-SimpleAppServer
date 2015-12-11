
module.exports = [
  //basic Log
  function(){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(request, response){
    this.channels.out.emit('basic', request, response);

    //Send the Response to the Client
    response.end();
  }
];
