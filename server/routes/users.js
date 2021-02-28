/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-28-2021
This module has routes for User authentication and
user registration
*/

const express = require('express')
const userrouter = express.Router();
let userController = require('../controllers/usercontroller');

userrouter.get('/login', userController.getLogin);
userrouter.post('/login', userController.postLogin);
userrouter.get('/register', userController.getRegistration);
userrouter.post('/register', userController.postRegistration);
userrouter.get('/logout',userController.getLogout);

module.exports = userrouter;