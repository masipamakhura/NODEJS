const fs = require('fs'); 


const  requestHandler = (req,res) => {
let url = req.url;
let method = req.method;
res.setHeader('Content-Type','text/html');
if(url === '/'){
    res.write('<html');
    res.write('<head><title>First nodejs app</title></head>');
    res.write("<body><h1>Welcome to first Nodejs App!</h1><form action='/message' method='POST'><input type='text' name='message' ><button type='submit'>Submit</button></form></body>");
    res.write('</html>');
   return res.end()
}

if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',(chunk)=>{
        console.log("chunck of data read per receive >> ",chunk);
        body.push(chunk)
    });

    req.on('end',()=>{
        let parsedBody = Buffer.concat(body).toString();
        console.log("chuncks converted to strings >>",parsedBody);
        fs.writeFile('message.txt',parsedBody, err => {
            if(!err){
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end();
            }
        });
       
    })

}
}

module.exports = requestHandler;