const contrl = require('./main.js');

var definition = function(){
  this.channels = {
    out: contrl.channels.out
  }
};

const interface = new definition();
module.exports = interface;
