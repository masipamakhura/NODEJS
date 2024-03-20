
const http = require('http');
const handleRequests = require('./routes');

const app = http.createServer(handleRequests)
app.listen(5050,()=>{
    console.log('App is running on port 5000')
})