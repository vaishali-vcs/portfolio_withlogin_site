// Client Side Ajax Script
function AttachWarnings(event)
{
    console.log(' in start');
    if(!confirm("Are you sure?"))
    {
        event.preventDefault();
        window.location.assign('/businesscontacts/login');
    }    
    
}

function Clearform() 
{
    document.getElementById("contactname").setAttribute("value", "");
    document.getElementById("contactphone").setAttribute("value", "");
    document.getElementById("contactemail").setAttribute("value", "");
    // document.querySelector("form").reset();
    console.log('in start');
}

$get("btndelete").onclick = function(event) {
    
    console.log('in javascript function')
    if(!confirm("Are you sure?"))
    {
       event.preventDefault();
       return false; // prevent browser action (don't go to the URL)
    }
  };

  
function showwarning (event)
{
    console.log('in javascript function')
    if(!confirm("Are you sure?"))
    {
       event.preventDefault();
    } 
}
