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

posteditcontact = (req, res, next)=>{
    let id = req.params.id;
    let updatedcontact = businesscontactsmodel({
        "_id": id,
        "name": req.body.name,
        "phone":  req.body.phone,
        "email": req.body.email
    });    

    businesscontactsmodel.updateOne({_id: id}, updatedcontact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }        
        else
        {
            res.render('businesscontacts/businesscontacts', 
            { title: 'Business Contacts', contactList: contactList });
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
           //refresh the booklist
           res.render('businesscontacts/businesscontacts', 
            { title: 'Business Contacts', contactList: contactList });
       }
    });
}

module.exports.displaybusiness_ctlist = displaybusiness_ctlist
module.exports.deletecontact = deletecontact
module.exports.get_contact_to_edit = get_contact_to_edit
