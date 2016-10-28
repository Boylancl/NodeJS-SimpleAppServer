const buildModuleGraph = require('../../common/methods/module/buildModuleGraph');
const config = require('./config.js');

var graph = buildModuleGraph(config);

graph['unitTest'].unitTest.emit('Start'); //Don't Like
