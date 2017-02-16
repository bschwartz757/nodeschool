const net = require('net');

function padDate(d) {
    return (d < 10 ? '0' : '') + d;
}

function getNow() {
    let date = new Date();
    return date.getFullYear() + '-' +
        padDate(date.getMonth() + 1) + '-' +
        padDate(date.getDate()) + ' ' + 
        padDate(date.getHours()) + ':' +
        padDate(date.getMinutes());
};

const server = net.createServer((socket) => {
    socket.end(getNow() + '\n');
}).on('error', (e) =>
    console.error(`SOCKET ERROR: ${e.message}`)
);

server.listen(Number(process.argv[2]));