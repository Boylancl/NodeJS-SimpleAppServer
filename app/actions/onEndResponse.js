module.exports = function(moduleScope){
  return [
    //basic Log
    function(data){
      console.log("%s is Closing Response", moduleScope.name);
      data.response.end();
    }
  ];
}
