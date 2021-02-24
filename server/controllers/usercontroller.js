const express = require('express')
let passport = require('passport');
let mongoose = require('mongoose');
const router = express.Router();
let userModel = require('../models/user');
let User = userModel.User; 

getLogin = (req, res)=> {
    res.render('auth/login', {title: 'Login' , errors: ''}); 
}


postLogin = (req, res, next)=> {
    passport.authenticate('local',
    (err, user, info) => {
        // server err
        if(err)
        {
            return next(err);
        }
        // if there a user login error
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/users/login');
        }
        req.login(user, (err) => {
            // server error
            if(err)
            {
                return next(err);
            }
            return res.redirect('/businesscontacts/getallcontacts');
        });
    })(req, res, next);
}

getRegistration = (req, res)=> {
    res.render('auth/register', {title: 'Register' , errors: ''}); 
}


postRegistration = (req, res) => {
    const {username, email, password} = req.body;
    let errors = [];

    //check required fields
    if(!username || !email || !password)
    {
        errors.push({msg: 'Please fill in all fields'});
        res.render('auth/register', {title: 'Login' ,'errors': errors});
    }
    else{
        //validation passed
         // instantiate a user object
         // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                console.log(err);
                errors.push({msg: 'Error: User Already Exists!'});
                return res.render('auth/register', {title: 'Login' ,'errors': errors});
            }
            else{
                console.log(err);
                errors.push({msg: 'System Error: Failed to register!'});
                return res.render('auth/register', {title: 'Login' ,'errors': errors});
            }
        }
        else
        {
            // if no error exists, then registration is successful
            // redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () => {
                req.flash('success_msg', 'You are now registered and can log in');
                res.redirect('/users/login');
            });
        }
    });
        
    }
}

getLogout = (req, res, next) => {
    req.logout();
    console.log('in getlogout');
    res.render('auth/login', {title: 'Login' , errors: ''});
}

module.exports.getLogin = getLogin
module.exports.postLogin = postLogin
module.exports.getRegistration = getRegistration
module.exports.postRegistration = postRegistration
module.exports.getLogout = getLogout