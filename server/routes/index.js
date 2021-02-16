/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-10-2021
This module handles all the HTTPS request redirections.
*/
let express = require('express');
let router = express.Router();
let indexcontroller = require('../controllers/indexcontroller');

/* set up GET route for default/Home page. */
router.get('/', indexcontroller.getHome);

/* set up POST route for About page. */
router.post('/', indexcontroller.getAbout);

/* set up home route for Home page. */
router.get('/home', indexcontroller.getHome);

/* set up POST route for About page. */
router.post('/home', indexcontroller.getAbout);

/* set up GET route for About page. */
router.get('/about', indexcontroller.getAbout);

/* set up GET route for Resume download. */
router.get('/resume', indexcontroller.getResume);

/* set up GET route for Projects page. */
router.get('/projects', indexcontroller.getProjects);

/* set up GET route for Services page. */
router.get('/services', indexcontroller.getServices);

/* set up GET route for Home page. */
router.get('/contact', indexcontroller.getContactpage);

/* set up POST route for Contact page to 
acknowledge the reciept of details in contact details. */
router.post('/contact', indexcontroller.processContactpage);

module.exports = router;
