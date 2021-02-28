/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-28-2021
This module has routes for business contacts 
guarded by Passport local authentication.
*/


let express = require('express');
let businessrouter = express.Router();
let businesscontactscontroller = require('../controllers/businesscontactscontroller');
let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in 
    
    if(!req.isAuthenticated())
    {
        return res.redirect('/users/login');
    }
    next();
} 

businessrouter.get('/addcontact', requireAuth, businesscontactscontroller.addContact);
businessrouter.get('/', requireAuth, businesscontactscontroller.displaybusiness_ctlist);
businessrouter.get('/getallcontacts', requireAuth, businesscontactscontroller.displaybusiness_ctlist); 
businessrouter.get('/getcontacttoedit/:id', requireAuth, businesscontactscontroller.get_contact_to_edit); 
businessrouter.get('/deletecontact/:id', requireAuth, businesscontactscontroller.deletecontact); 
businessrouter.post('/upsertcontact' , requireAuth, businesscontactscontroller.upsertcontact);
module.exports = businessrouter;