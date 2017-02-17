const http = require('http');
const url = require('url');

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    }
}

const server = http.createServer((req, res) => {
    if (req.err) {
        res.writeHead(400);
        res.end();
    }
    let parsedUrl = url.parse(req.url, true);
    let time = new Date(parsedUrl.query.iso);
    let result;

    if (req.method === 'GET') {
        if (parsedUrl.pathname === '/api/parsetime') {
            result = parseTime(time);
        } else if (parsedUrl.pathname === '/api/unixtime') {
            result = unixTime(time);
        }
    } else {
        res.writeHead(404);
        res.end(`404 - Not Found`);        
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
});
server.on('clientError', (err, socket) => {
    socket.end(`400 - Bad Request`);
})

server.listen(Number(process.argv[2]));