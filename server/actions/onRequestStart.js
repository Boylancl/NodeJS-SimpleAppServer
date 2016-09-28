
const routeHttpRequest = require('../../common/methods/server/routeHTTPRequest.js')

module.exports = function(instance){
return [
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
    //Log that the request was Recieved
    ,function(){
      console.log('%s Recieved Request!', instance.name);
    }
    //Process the request
    ,function(request, response){
      routeHttpRequest(instance, request, response);
    }
  ];
}
