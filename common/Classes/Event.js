module.exports = function(eventName, channels, eventHandlers){
  this.eventName = eventName;
  this.eventHandlers = eventHandlers;
  this.channels = channels;
}
