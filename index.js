var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello DOTC2020 Auckland from ' + req.protocol + '://' + req.get('host') + req.originalUrl+'\n*****Version: 0.0.1*****');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Your nodejs app is listening at port %s',  port);
});
