module.exports = function(instance, channel, signal){
  var channelSignals = instance[channel]._events;

  var signalFound = channelSignals[signal];

  if(signalFound != undefined
    && signalFound != null){
    return true;
  }

  return false;

}