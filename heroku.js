var fs = require('fs');
var http = require('http');

var html = fs.readFileSync('./index.html').toString();

http.createServer(function (req, res) {
  // send basic http headers to client
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Transfer-Encoding": "chunked"
  });
  // send simple html page:
  res.end(html);
}).listen(process.env.PORT || 9000);
