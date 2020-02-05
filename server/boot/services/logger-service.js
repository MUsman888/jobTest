'use strict';
var winston=require('winston');
let path = require('path');
const logger = new (winston.createLogger)({
  format:winston.format.json(),
  // winston.format.timestamp())
  // format:  winston.format.combine(
  //     // format.colorize(),
  //     winston.format.timestamp({
  //       format: 'YYYY-MM-DD HH:mm:ss'
  //     }),
  //     // winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  //   ),
  transports: [
      new (winston.transports.File)({
          filename: path.join(__dirname , '../../local-storage/combined.log')
      })
  ]
});
module.exports = {
  logger:logger
}
