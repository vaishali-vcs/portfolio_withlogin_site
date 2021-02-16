//set up the necessary libraries
let express = require('express');


module.exports.getHome = function(req, res, next) {
    res.render('home', { title: 'Home' });
  }

module.exports.postHome =  function(req, res, next) {
    res.render('index', { title: 'About' });
}

module.exports.getAbout = function(req, res, next) {
    res.render('index', { title: 'About' });
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
    res.render('index', { title: 'Projects' });
}

module.exports.getServices =  function(req, res, next) {
    res.render('index', { title: 'Services' });
}

module.exports.getContactpage = function(req, res, next) {
    res.render('contact', { title: 'Contact', entered_name: '' });
}

module.exports.processContactpage = function(req, res, next) {
    console.log(req.body.inputname);
  
    res.render('contact', { title: 'Contact', entered_name: req.body.inputname });
  }