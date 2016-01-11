const routeHttpRequest = require('../../common/methods/server/routeHTTPRequest.js')

module.exports = function(moduleScope){
  return [
    //basic Log
    function(){
      console.log("%s Recieved Request!", moduleScope.name);
    }
    //Pass the request to the Basic Controller
    ,function(request, response){

      routeHttpRequest(moduleScope, request, response);

      //Send the Response to the Client
      response.end();
    }
  ];
}
