/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-28-2021
This module has User schema used by Passport
for authentication
*/

// required module for user authentication
let mongoose = require('mongoose');
let passportlocalmongoose = require('passport-local-mongoose');
let passport = require('passport');

// user schema for authentication
let User = mongoose.Schema(
    {
        username:
        {   type: String, 
            default: '', 
            trim: true, 
            required: "username is required"},
        email:
        {   type: String, 
            default: '', 
            trim:true, 
            required: "email is required" },
        displayName:
        {   type: String, 
            default: '', 
            trim:true, 
            required: "displayName is required" 
        },
        created:
        {   type: Date, 
            default: Date.now
        },
        updated:
        {   type: Date, 
            default: Date.now
        }
    },
    {
        collection: "Users"
    }
);

let options = ({missingPasswordError: "wrong/missing password" });
User.plugin(passportlocalmongoose, options);

module.exports.User = mongoose.model('User', User);