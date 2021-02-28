/*
File Name: index.js 
Name: Vaishali Siddeshwar
Student ID: 301172372
Date: Feb-28-2021
This module has Client Side JavaScript for 
confirmation before deletion and form incomplete alerts.
*/

// show incomplete form warning
function showwarning()
{
    txtname = document.getElementById("contactname").value;
    txtphone = document.getElementById("contactphone").value;
    txtemail = document.getElementById("contactemail").value;

    if( txtname=="" || txtphone=="" || txtemail=="")
    {
        alert('Form is incomplete');
        return false;
    }
    if(!confirm("Are you sure?"))
    {
        return false;
    }    
}

// Client Side show confirmation dialog Script
function showconfirmationdialog()
{
    if(!confirm("Are you sure?"))
    {
        return false;
    }    
}

// clear the form on click of "clear"
function Clearform() 
{
    document.getElementById("contactname").value= "";
    document.getElementById("contactphone").value= "";
    document.getElementById("contactemail").value= "";
}