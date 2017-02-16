const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    if (req.method !== 'POST') {
        return res.end('Accepts only POST requests');
    }
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(Number(process.argv[2]));