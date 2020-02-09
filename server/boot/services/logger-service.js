'use strict';
var winston=require('winston');
let path = require('path');
const logger = new (winston.createLogger)({
  format:winston.format.json(),
  transports: [
      new (winston.transports.File)({
          filename: path.join(__dirname , '../../local-storage/combined.log')
      })
  ]
});
module.exports = {
  logger:logger
}
