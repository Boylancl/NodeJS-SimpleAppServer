const regex = "\d+|[-,+]\d+";

module.exports = function(scope)
{
  return [
    function(data){
      console.log('OnSolve');
      var equation = data.rawEquation;

      var eqArray = regex.exec(equation);

      console.log(eqArray);

    }
  ];
}
