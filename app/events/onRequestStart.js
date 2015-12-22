const routeHttpRequest = require('../../common/methods/server/routeHTTPRequest.js')

module.exports = function(instance){
  return [
    //basic Log
    function(){
      console.log("%s Recieved Request!", instance.name);
    }
    //Pass the request to the Basic Controller
    ,function(request, response){

      routeHttpRequest(instance, request, response);

      //Send the Response to the Client
      response.end();
    }
  ];
}
