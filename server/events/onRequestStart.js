
module.exports = [
  
  //Basic Request Logging
  function(request,response){
    console.log("***Request: %s %s %s ",
    new Date(),
    request.method,
    request.url);
  }

];
