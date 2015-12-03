
module.exports = {

  EventName:'basic'
  ,Handlers:[
    function(request, response){
      console.log('Basic Controller Recieved Request!!!');
    }
    ,function(request, response){
      response.write('Hello World!!');
    }

  ]
};
