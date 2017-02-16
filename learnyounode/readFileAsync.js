var fs = require('fs');
var path = require('path');

module.exports = function (dir, fileExt, callback) {
    fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err);
        }
        list = data.filter(function(el) {
            return path.extname(el) === '.' + fileExt;
        });
        callback(null, list);
    });
}
