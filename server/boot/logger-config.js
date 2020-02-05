'use strict';
let logger = require('./services/logger-service');
const winstonServer = require('winston-dashboard');
const path = require('path');
module.exports = function(server,cb) {
    // Instantiate the server
    winstonServer({
      path: path.join(__dirname,'../local-storage'), //Root path of the logs (used to not show the full path on the log selector)
      logFiles: '/**/*.log', //Glob to search for logs, make sure you start with a '/'
      port: 8000,
      orderBy: 'creationTime' // Optional custom port, defaults to 8000,
    //  'creationTime' | 'modifiedTime', if none is provided then it will sort by alphabetical order
    });
    cb();
};