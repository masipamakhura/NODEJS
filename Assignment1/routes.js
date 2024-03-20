
const handleRequests = function(req,res){
    res.setHeader('Content-Type','text/html');
    const url = req.url;
    
    if(url === '/'){
       res.write('<html>');
       res.write('<head><title>GREETING</title></head>');
       res.write('<body>');
       res.write('<h1>Hello World !</h1>')
       res.write('<form action="/create-user" method="POST"><input type="text" name="username" > <br> <button type="submit">Signup</button></form')
       res.write('</body>');
       res.write('</html>');
       return res.end();
    }else if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>GREETING</title></head>');
        res.write('<body>');
        res.write('<h1> list of all our app users</h1>');
        res.write('<ul><li>Matsebe</li><li>Comfort</li> <li>Makola</li> <li>Mafewu</li> <li>Moloko</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(url ==='/create-user' && req.method ==='POST'){
        let body = [];
        req.on('data',chunck =>{
            body.push(chunck);
        })
        req.on('end',()=>{
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location','/users')
            return res.end()
        })
       

    }
    else{
        console.log('Error unknown routes')
        res.write("Nodejs assignment ONE");
        return res.end();
    }
}


module.exports = handleRequests;                        