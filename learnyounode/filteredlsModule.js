var fs = require('fs'),
  path = require('path');

module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    }
    var result = [];
    files.forEach(function(file) {
      if (path.extname(file) === '.' + filter) {
        result.push(file);
      }
    });
    return callback(
      undefined,
      result
    )
  })
};
