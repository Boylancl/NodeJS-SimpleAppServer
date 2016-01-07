module.exports = {
  this.name = "defaultApp";

  this.actions = {
    'getHttpResponse' : require('./events/onRequestStart.js')
  };
  
};
