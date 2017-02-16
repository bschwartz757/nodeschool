
var readFileAsync = require('./readFileAsync');
var dir = process.argv[2];
var filetype = process.argv[3];

readFileAsync(dir, filetype, function(err, list) {
    if (err) {
        return console.error('The following error occurred: ', err);
    }
    list.forEach(function(file) {
        console.log(file);
    });
});