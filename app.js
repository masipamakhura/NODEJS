
const http = require('http');
const requestHandler = require('./routes')
const server = http.createServer( requestHandler)

server.listen(4000,function(){
    console.log('Server is running on port 4000')
})