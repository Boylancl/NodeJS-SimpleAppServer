
module.exports = [

  function(request, response){
    console.log('Basic Controller Recieved Request!!!');
  }
  ,function(request, response){
    response.write('Hello World!!');
  }

];
