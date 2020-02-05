let logger = require('../boot/services/logger-service').logger;
module.exports = function(options) {
    return function logError(err, req, res, next) {
        logger.error(JSON.stringify(err));
      next(err);
    };
  };