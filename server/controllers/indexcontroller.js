//set up the necessary libraries
let express = require('express');


module.exports.getHome = function(req, res, next) {
    res.render('home', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
  }

module.exports.postHome =  function(req, res, next) {
    res.render('index', { title: 'About', displayName: req.user ? req.user.displayName : '' });
}

module.exports.getAbout = function(req, res, next) {
    res.render('index', { title: 'About', displayName: req.user ? req.user.displayName : '' });
  }

module.exports.getResume =   function ( req, res ) {
    let path =  __dirname + '/../../public/' +'/Content/Vaishali_Siddeshwar_Resume.pdf';
    
    res.download(path, function (err) {
      if (err) {
          console.log("Error");
          console.log(err);
      } else {
          console.log("Success");
      }}); 
}

module.exports.getProjects =  function(req, res, next) {
    res.render('index', { title: 'Projects', displayName: req.user ? req.user.displayName : '' });
}

module.exports.getServices =  function(req, res, next) {
    res.render('index', { title: 'Services' , displayName: req.user ? req.user.displayName : ''});
}

module.exports.getContactpage = function(req, res, next) {
    res.render('contact', { title: 'Contact', entered_name: '' , displayName: req.user ? req.user.displayName : '' });
}

module.exports.processContactpage = function(req, res, next) {
    console.log(req.body.inputname);
  
    res.render('contact', { title: 'Contact', entered_name: req.body.inputname, displayName: req.user ? req.user.displayName : '' });
  }