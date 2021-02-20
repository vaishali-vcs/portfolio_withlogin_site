let express = require('express');
let businessrouter = express.Router();
let businesscontactscontroller = require('../controllers/businesscontactscontroller');

businessrouter.get('/', businesscontactscontroller.displaybusiness_ctlist);
businessrouter.get('/login', businesscontactscontroller.displaybusiness_ctlist);
businessrouter.get('/getallcontacts', businesscontactscontroller.displaybusiness_ctlist); 
businessrouter.get('/getcontacttoedit/:id', businesscontactscontroller.get_contact_to_edit); 
businessrouter.get('/deletecontact/:id', businesscontactscontroller.deletecontact); 
businessrouter.post('/upsertcontact' , businesscontactscontroller.upsertcontact);
module.exports = businessrouter;