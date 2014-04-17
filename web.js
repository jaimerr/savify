var fs = require('fs');
var express = require('express');
var htmlfile = "index.html";
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
var html = fs.readFileSync(htmlfile).toString();
// var output = new Buffer(1000);
// output = fs.readFileSync('index.html');
response.send(html);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
