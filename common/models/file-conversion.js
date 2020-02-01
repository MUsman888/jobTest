'use strict';
let fileConversionService = require('../../server/boot/services/file-conversion-service');

module.exports = function (Fileconversion) {

  Fileconversion.thumbnail = async (url, request, response) => {
    try {
      let convertedFile = await fileConversionService.thumbnailGenerator(url);
      response.write(convertedFile);
      response.end();
    } catch (error) {
      throw error
    }
  }

  Fileconversion.remoteMethod("thumbnail", {
    isStatic: true,
    accepts: [
      {
        arg: "url",
        type: "string"
      }, {
        arg: 'req',
        type: 'object',
        'http': {
          source: 'req'
        }
      },
      {
        arg: 'res',
        type: 'object',
        'http': {
          source: 'res'
        }
      }
    ],
    returns: {},
    http: {
      path: "/thumbnil",
      verb: "post"
    }
  });
};
