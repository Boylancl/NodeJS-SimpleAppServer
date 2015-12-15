
module.exports = [
  //basic Log
  function(){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(request, response){
    var route = this.getRoute(request);
    route(request, response);
    //Send the Response to the Client
    response.end();
  }
];
