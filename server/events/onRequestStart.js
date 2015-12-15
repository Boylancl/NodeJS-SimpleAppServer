
module.exports = [

  //Basic Request Logging
  function(request){
    console.log("***Request: %s %s %s ",
    new Date(),
    request.method,
    request.url);
  }
  //Basic Response Logging
  ,function(request, response){
    //Set up Event Handling for Response commpletion
    response.on('finish', function(){
      console.log("***Response: %s %s"
      ,new Date()
      ,response.statusCode);
    });
  }
  //Process the request
  ,function(request, response){
    console.log('Server Recieved Request!');
    var route = this.getRoute();

    route(request, response);
  }

];
