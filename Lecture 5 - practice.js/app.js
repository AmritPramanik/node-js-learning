const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url.endsWith(".css") || req.url.endsWith(".js")) {
    const filePath = path.join(__dirname, req.url);
    const ext = path.extname(filePath);
    const contentType = ext === ".css" ? "text/css" : "application/javascript";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  } 
  else if (req.url === "/" || req.url === "/home") {
    res.setHeader('content-type','text/html');
    res.end(fs.readFileSync(path.join(__dirname, "index.html")));
  } 
  else if (req.url === "/men") {
    res.write("<body><h1>Welcome to Men section!</h1></body>");
    return res.end();
  } 
  else if (req.url === "/women") {
    res.write("<body><h1>Welcome to Women section!</h1></body>");
    return res.end();
  } 
  else if (req.url === "/kids") {
    res.write("<body><h1>Welcome to Kids section!</h1></body>");
    return res.end();
  } 
  else if (req.url === "/cart") {
    res.write("<body><h1>Place your Order!</h1></body>");
    return res.end();
  } 
  else {
    res.write("<body><h1>404 Page Not Found!</h1></body>");
    return res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Sarver address : http://localhost:${port}`);
});
