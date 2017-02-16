var fs = require('fs');
var path = require('path');

var filedir = process.argv[2];
var filetype = '.' + process.argv[3];

fs.readdir(filedir, function(err, files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(function(file) {
        if (path.extname(file) === filetype) {
            console.log(file);
        }
    });
});
