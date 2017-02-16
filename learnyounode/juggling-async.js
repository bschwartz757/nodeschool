const http = require('http')

let results = []
let counter = 0

function printResults(results) {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function getStream(url, index) {
    http.get(url, (response) => {
        response.setEncoding('utf8')
        let chunks = []
        response.on('error', (e) => {
            console.error(`STREAM ERROR: ${e.message}`)
            response.resume()
            return
        })
        response.on('data', (chunk) => {
            chunks.push(chunk)
        })
        response.on('end', () => {
            let output = chunks.reduce((a, b) => 
                a + b
            )
            results[index] = output
            counter++
            if (counter === 3) {
                printResults(results)
            }
        })
    }).on('error', (e) =>
        console.error(`NETWORK ERROR: ${e.message}`))
}

for (let i = 0; i < 3; i++) {
    getStream(process.argv[2 + i], i)
}