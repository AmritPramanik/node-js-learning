const http = require ('http');

const server = http.createServer((req, res) =>{
    console.log(req.url,req.method);

    // sending response to client
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');

    if(req.url === '/'){
        res.write('<body><h1>Welcome to Home</h1></body>');
        return res.end();
    }
    else if(req.url === '/products'){
        res.write('<body><h1>Checkout out products</h1></body>');
        return res.end();
    }
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

const port = 3001;
server.listen(port,()=>{
    console.log(`Server running on address http://localhost:${port}`);
});