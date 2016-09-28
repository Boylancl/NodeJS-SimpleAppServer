const routeHttpRequest = require('../../common/methods/server/routeHTTPRequest.js');

module.exports = function(moduleScope){
  return [
    //basic Log
    function(){
      console.log("%s Recieved Request!", moduleScope.name);
    }
    //Pass the request to the Basic Controller
    ,function(inBuffer){

      routeHttpRequest(moduleScope, inBuffer.request, inBuffer.response);

      //Send the Response to the Client
      inBuffer.response.end();
    }
  ];
}
