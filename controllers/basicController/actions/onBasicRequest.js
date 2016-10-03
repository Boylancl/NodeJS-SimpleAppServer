
module.exports = function(scope){
  return [
    function(){
      console.log('%s Recieved Request!!!', scope.name);
    }
    ,function(data){
      data.response.write('Hello World!!');
    }
    ,function(data){
      data.signal = "end";
      
      scope.out(data);
    }
  ];
}
