var express = require('express');
var app = express();
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


app.listen(8080);
console.log("App listening on port 8080");

// Routes

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});