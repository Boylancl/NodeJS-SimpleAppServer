module.exports = function(config){
    this.channels = config.channels;

  //init Event Handlers
  for(var key in config.events){
    this.channels.in.on(key, config.events[key]);
  }
}
