//connect to the businesscontacts model
let businesscontactsmodel = require('../models/businesscontactsmodel.js');

displaybusiness_ctlist = (req, res, next) => {
    businesscontactsmodel.find((err, contactList) => {
        if(err)
        {
            res.render('error', { title: 'Error' });
        }
        else
        {
            res.render('businesscontacts/businesscontacts', 
            { title: 'Business Contacts', contactList: contactList, contacttoedit:"" });
        }
    });
} 

get_contact_to_edit = (req, res, next)=>{
    let id = req.params.id; 
   
    businesscontactsmodel.findById(id, (err, contacttoedit) => {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }        
        else{
                businesscontactsmodel.find((err, contactList) => {
                    if(err)
                    {
                        res.render('error', { title: 'Error' });
                    }
                    else
                    {
                        res.render('businesscontacts/businesscontacts', 
                        {title: "Business Contacts", contactList: contactList , contacttoedit:contacttoedit})                       
                    }
                });
            }
    });
}

upsertcontact = (req, res, next) => {
    
    let updatedcontact = businesscontactsmodel({
        "name": req.body.contactname,
        "contact":  req.body.contactphone,
        "email": req.body.contactemail
    });  

    console.log(updatedcontact);
     
    businesscontactsmodel.updateOne( { name: req.body.contactname},
    { $set: updatedcontact }, { upsert: true, multi: true }, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }        
        else
        {   
            res.redirect('getallcontacts');                     
        }   
    });
}

deletecontact = (req, res, next)=>{
    let id = req.params.id;
    businesscontactsmodel.remove({_id: id}, (err)=>{
         if(err)
       {
           console.log(err);
           res.end(err);   
       }        
       else
       {
            businesscontactsmodel.find((err, contactList) => {
                if(err)
                {
                    res.render('error', { title: 'Error' });
                }
                else
                {
                    res.render('businesscontacts/businesscontacts', 
                    {title: "Business Contacts", contactList: contactList , contacttoedit:""})                       
                }
            });
       }
    });
}

module.exports.displaybusiness_ctlist = displaybusiness_ctlist
module.exports.deletecontact = deletecontact
module.exports.get_contact_to_edit = get_contact_to_edit
module.exports.upsertcontact = upsertcontact