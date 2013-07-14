var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var txt = fs.readFileSync('index.html');
    response.send(buffer.toString(txt));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});