/** Module to set up the routes and 
paths to node_modules and public folders.

File Name: app.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-10-2021

*/

//installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require("body-parser");
let logger = require('morgan');

// link the path to the index router.
let indexRouter = require('../routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
app.use(bodyParser.urlencoded({
  extended: true
}));

//Use index router and body parser
app.use(bodyParser.json());
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "Error"});
});

module.exports = app;
