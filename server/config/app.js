let createError = require('http-errors');
const express = require('express');
let path = require('path');
let mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const app = express()
// connect flash
app.use(flash());
//DB Config
const db = require('../config/db').URI;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// create a User Model Instance
let userModel = require('../models/user');
let User = userModel.User;
let passport = require('passport');
//body parser
app.use(express.urlencoded({extended: false}))

//express session
//setup express session
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: true,
    resave: true
  }));

  // initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement a User Authentication Strategy
passport.use(User.createStrategy());

// serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//bodyparser
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', require('../routes/index'));
app.use('/businesscontacts', require('../routes/businesscontacts'));
app.use('/users', require('../routes/users'));


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
  res.render('error', { title: 'Error'});
});

module.exports = app;