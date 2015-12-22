
module.exports = function(instance){
  return [
    function(){
      console.log('%s Recieved Request!!!', instance.name);
    }
    ,function(request, response){
      response.write('Hello World!!');
    }
  ];
}
