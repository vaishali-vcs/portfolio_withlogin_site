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

businessrouter.get('/', requireAuth, businesscontactscontroller.displaybusiness_ctlist);
businessrouter.get('/getallcontacts', requireAuth, businesscontactscontroller.displaybusiness_ctlist); 
businessrouter.get('/getcontacttoedit/:id', requireAuth, businesscontactscontroller.get_contact_to_edit); 
businessrouter.get('/deletecontact/:id', requireAuth, businesscontactscontroller.deletecontact); 
businessrouter.post('/upsertcontact' , requireAuth, businesscontactscontroller.upsertcontact);
module.exports = businessrouter;