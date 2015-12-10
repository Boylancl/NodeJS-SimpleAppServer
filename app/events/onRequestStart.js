var actions = [
  //basic Log
  function(){
    console.log("App Recieved Request!");
  }
  //Pass the request to the Basic Controller
  ,function(request, response){
    this.channels.out.emit('basic', request, response);

    //Send the Response to the Client
    response.end();
  }
];

module.exports = function(request,response){
  for(var i=0; i<actions.length; i++){
    actions[i].call(this,request, Response);
  }
}
