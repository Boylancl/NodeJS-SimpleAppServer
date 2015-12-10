
module.exports = {

  EventName:'basic'
  ,Handlers:[
    function(request, response){
      console.log('Advance Controller Recieved Request!!!');
    }
    ,function(request, response){
      response.write('Hello World!!');
    }

  ]
};
