var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
    console.log('success: ', res.statusCode);
    console.log(res);
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: ' + chunk + '\n');
    });
    res.on('error', function(error) {
        console.log('RESPONSE ERROR: ', error);
    });
}).on('error', function(e) {
    console.log('HTTP ERROR: ', e.message);
});