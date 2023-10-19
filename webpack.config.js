const path = require('path');

module.exports = {
    mode: 'development',
    entry: './biblio/src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/biblio/dist'
    }
  };