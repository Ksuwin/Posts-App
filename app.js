var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var ejsEngine = require("ejs-locals");
var postsRoutes = require('./routes/post');
var config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected correctly to MLab Database");
});

var app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.engine("ejs", ejsEngine);
app.set('views', __dirname+'/views');
app.set("view engine", "ejs");

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

app.use('/', postsRoutes);

app.listen(config.port, function() {
    console.log('Server started on port ' + config.port);
});
