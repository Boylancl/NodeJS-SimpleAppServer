module.exports = function(eventDict, channel){
  //init Event Handlers
  for(var key in eventDict){
    channel.on(key, eventDict[key]);
  }
}
