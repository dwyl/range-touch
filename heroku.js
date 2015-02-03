var fs = require('fs');
var http = require('http');
var html = fs.readFileSync('./index.html').toString();

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);   // send simple html page:
}).listen(process.env.PORT || 9000);
