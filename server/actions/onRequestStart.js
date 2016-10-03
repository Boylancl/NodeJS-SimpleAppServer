
const routeHttpRequest = require('../../common/methods/server/routeHTTPRequest.js');
const parseURL = require('../../common/methods/server/parseURL.js');

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
      var path = parseURL(request.url);

      var service = {};

      for(var i=0; i<path.length; i++){
        if(path[i] != null && path[i] != undefined
        && path[i] != ''){
          if(service.app == undefined){
            service.app = path[i];
          }
          else if(service.operation == undefined){
            service.operation = path[i];
          }
        }
      }

      var outObjects = {
        signal: service.app
        ,request: request
        ,response: response
        ,service: service
      };

      instance.out(outObjects);
    }
  ];
}
