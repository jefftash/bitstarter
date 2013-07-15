var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

<<<<<<< HEAD
var buffer = new Buffer(fs.readFileSync("index.html"));
=======
var buffer = new Buffer(fs.readFileSync('index.html'));
>>>>>>> 7b8633d0df8664ced6c6871fa08de17779c27e66

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
