module.exports = function(){
  //init Event Handlers
  for(var key in this.events){
    this.channels.in.on(key, this.events[key]);
  }
}
