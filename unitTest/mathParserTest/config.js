module.exports = {
  'mathParser': {
    configuration: {
      'actions' : {
        'onSolve' : require('../../math/parser/actions/onSolve.js')
      }
    }
  }
  ,'unitTest': {
    configuration: {
      'actions' : {
        'Start': require('./actions/onStart')
      }
    }
    ,routes: {
      'Start': {
        connectTo: "mathParser"
        ,execute: "onSolve"
      }
    }
  }
}
