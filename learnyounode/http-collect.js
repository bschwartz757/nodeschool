var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf8');
    var strings = [];
    res.on('error', function(e) {
        return console.error('RESPONSE ERROR: ', e);
    });
    res.on('data', function(chunk) {
        strings.push(chunk);
    });
    res.on('end', function() {
        var sum = strings.reduce(function(a, b) {
            return a + (b.split('').length);
        }, 0);
        
        var output = strings.reduce(function(a, b) {
            return a + b;
        });

        console.log(sum);
        console.log(output)        
    });
}).on('error', function(e) {
    console.error('HTTP ERROR: ', e.message);
});

// var bl = require('bl')

// http.get(url, function(response) {
//     response.pipe(bl(function(err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })