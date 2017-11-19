var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;
var dbUrl = 'mongodb://localhost/four';
mongoose.connect(dbUrl,{useMongoClient:true});

var app = express();
// view engine setup
app.set('views', './app/views/pages');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(session({
	store: new mongoStore({
		url: dbUrl,
		collection: 'sessions',
	}),
	secret: 'four',
	cookie: {
	  maxAge: 1000 * 60 * 60 * 2,
	  httpOnly: true
	},
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

require('./routes/index')(app);

app.listen(port);

module.exports = app;