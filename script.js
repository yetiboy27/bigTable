var express = require('express');

var app = express();

// var quotes = require('./quotes.js');

var eloquarest = require('./eloquarest.js');

app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('content'));

app.get('/', function(req, res){
  res.render('index.ejs');
});


app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});