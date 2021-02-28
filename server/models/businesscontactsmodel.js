/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-28-2021
This module has Business contact schema.
the DB collection name is business_contacts
*/

let mongoose = require('mongoose');

let contactSchema = {
    name: String,
    contact: String,
    email: String
}

//create a model class
let businesscontactsModel = mongoose.Schema(contactSchema,{
    collection: "business_contacts"
});

module.exports = mongoose.model("business_contacts",businesscontactsModel);