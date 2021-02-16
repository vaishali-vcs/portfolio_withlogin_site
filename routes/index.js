/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-10-2021
This module handles all the HTTPS request redirections.
*/

//set up the necessary libraries
var express = require('express');
var router = express.Router();

/* set up GET route for default/Home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* set up POST route for About page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'About' });
});


/* set up home route for Home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* set up POST route for About page. */
router.post('/home', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* set up GET route for About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* set up GET route for Resume download. */
router.get('/resume', function ( req, res ) {
  let path =  __dirname + '/../public/' +'/Content/Vaishali_Siddeshwar_Resume.pdf';
  
  res.download(path, function (err) {
    if (err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log("Success");
    }}); 
});

/* set up GET route for Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* set up GET route for Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* set up GET route for Home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', entered_name: '' });
});

/* set up POST route for Contact page to 
acknowledge the reciept of details in contact details. */
router.post('/contact', function(req, res, next) {
  console.log(req.body.inputname);

  res.render('contact', { title: 'Contact', entered_name: req.body.inputname });
});


module.exports = router;
