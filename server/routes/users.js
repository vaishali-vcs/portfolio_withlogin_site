const express = require('express')
const userrouter = express.Router();
let userController = require('../controllers/usercontroller');

userrouter.get('/login', userController.getLogin);
userrouter.post('/login', userController.postLogin);
userrouter.get('/register', userController.getRegistration);
userrouter.post('/register', userController.postRegistration);
userrouter.get('/logout',userController.getLogout);

module.exports = userrouter;