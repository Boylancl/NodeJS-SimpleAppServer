const basicModule = require('../Common/Classes/BasicModule.js');

module.exports = function(config){
  basicModule.call(this, config); //Inherit Parent Class

  //Add Overrides and new method/members
  this.interface = {
    channels: {
      out: config.channels.out
    }
  };
};
