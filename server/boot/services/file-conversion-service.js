'use strict'
var Jimp = require('jimp');
var urlCheck = require("valid-url");
let thumbnailGenerator = async (url) => {
  try {
    if (urlCheck.isUri(url)) {
      let getFile = await Jimp.read(url);
      let convertedFile = await getFile.resize(50, 50).quality(100).greyscale();
      return await convertedFile.getBufferAsync(Jimp.AUTO);
    }
    else {
      throw new Error("Please give a proper url ")
    }
  } catch (error) {
    throw error
  }
}
module.exports = {
  thumbnailGenerator: thumbnailGenerator
}