const server = require('./main.js');


module.exports = {

    channels: {
      out :server.serverInstance
    }
};
