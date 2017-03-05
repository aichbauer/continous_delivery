var express = require('express');
var app = express();

const PORT = 3000;

app.get('/', function(req, res){

  res.send('Hello, Hannes!')

});

app.listen(PORT, function(){

  console.log(`Magic happens on http://localhost:${PORT}`);

})