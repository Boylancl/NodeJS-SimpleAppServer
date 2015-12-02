
module.exports = [
  //Basic Response Logging
  function(request, response){
    response.on('finish', function(){
      console.log("***Response: %s %s"
      ,new Date()
      ,response.statusCode);
    });
  }

];
