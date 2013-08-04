var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var buffer = fs.readFileSync('./index.html');
var texto = buffer.toString('utf-8',0,27);

app.get('/', function(request, response) {
  response.send(texto);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
