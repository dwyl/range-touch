var fs = require('fs');
var http = require('http');
var path = require('path');
var html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
var PORT = process.env.PORT || 9000

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);   // send simple html page:
}).listen(PORT);

console.log('Visit: http://localhost:' + PORT + ' (in your browser)');
