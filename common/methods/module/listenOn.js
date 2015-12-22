module.exports = function(eventName, channel, actionList){
  //init Event Handlers
  if(Array.isArray(actionList)){
    for(var i=0; i<actionList.length; i++){
      channel.on(eventName, actionList[i]);
    }
  }
  else{
    channel.on(eventName, actionList);
  }
}
