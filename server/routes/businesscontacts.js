let express = require('express');
let businessrouter = express.Router();
let businesscontactscontroller = require('../controllers/businesscontactscontroller');

businessrouter.get('/login', businesscontactscontroller.displaybusiness_ctlist); 
businessrouter.get('/getcontacttoedit/:id', businesscontactscontroller.get_contact_to_edit); 
businessrouter.post('/deletecontact/:id', businesscontactscontroller.deletecontact); 

module.exports = businessrouter;