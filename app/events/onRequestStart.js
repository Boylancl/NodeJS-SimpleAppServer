module.exports = [
  //basic Log
  function(request, response){
    console.log("App Recieved Request!");
  }
  //Basic Response
  ,function(request, response){
    response.write("Hello World!!");
  }
];
