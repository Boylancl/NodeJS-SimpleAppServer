module.exports = function(scope){
  return [
    //basic Log
    function(data){
      console.log("%s is Closing Response", scope.name);
      data.response.end();
    }
  ];
}
