const basicModule = require('../Common/Classes/BasicModule.js');

module.exports = {
  //methods
  Init: function(appDef)
  {
    console.log(appDef);
    basicModule.call(appDef);
  }

};
