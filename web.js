var fs = require('fs');
// var express = require('express');
var http = require('http');
var htmlfile = "index.html";
// var app = express.createServer(express.logger());


var server = http.createServer(function(request, response) {
var html = fs.readFileSync(htmlfile).toString();
var output = new Buffer(1000);
output = fs.readFileSync('index.html');
//response.head(200, {"Content-type": "text/plain"});

response.write(output);
response.end();
});
var port = process.env.PORT || 8080;
server.listen(port);
/*
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/
console.log('Listening');
