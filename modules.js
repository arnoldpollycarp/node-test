const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('This is our home page')
    }

    if (req.url === '/about') {
        return res.end('This is our about page')
    }
     
    res.end('<h1>Oooops something went wrong</h1>')
})

server.listen(5000)