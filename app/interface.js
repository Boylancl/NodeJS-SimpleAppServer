const app = require('./main.js');

var definition = function(){
  this.channels = {
    out: app.channels.out
  }
};

const interface = new definition();
module.exports = interface;
