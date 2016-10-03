
module.exports = function(scope){
  return [
    //basic Log
    function(){
      console.log("%s Recieved Request!", scope.name);
    }
    //Pass the request to the Basic Controller
    ,function(data){

      var outObject = {
        signal: data.service.operation
        ,payload: data.request
        ,response: data.response
      };

      scope.out(outObject);
    }
  ];
}
