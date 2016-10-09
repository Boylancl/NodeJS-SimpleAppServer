module.exports = function(scope){
  return [
    function(data)
    {
      //Parse the raw equation from the request

      var outData = {
        signal: "solve"
        ,rawEquation: ""
      }

      //Send out to be solved
      scope.out(outData);
    }
  ]
}
