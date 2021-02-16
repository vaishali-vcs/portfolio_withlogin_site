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