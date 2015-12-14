module.exports = [
  //Logging
  function(){
    console.log('Router Recieved Request!');
  }
  //Route the Request
  ,function(request, response){
    var route = this.getRoute(request);
    
    route(request, response); //Send the Request onward
  }
]
