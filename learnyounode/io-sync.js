var fs = require('fs');

var result = fs.readFileSync(process.argv[2], 'utf8')
            .split('\n')
            .length - 1;
console.log(result);
