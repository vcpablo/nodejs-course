/**
 * In package.json dependencies:
 * ^ updating is allowed for patches or minor relases
 * ~ updating is allowed only for patches
 */

var express = require('express');
var bodyParser = require('body-parser');
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended:false });
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

apiController(app);
htmlController(app);

app.listen(port);