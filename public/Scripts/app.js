// Client Side Ajax Script
function showwarning()
{
    console.log(' in start');
    if(!confirm("Are you sure?"))
    {
        return false;
        // window.location.assign('/businesscontacts/login');
    }    
}

// clear the form on click of "clear"
function Clearform() 
{
    document.getElementById("contactname").value= "";
    document.getElementById("contactphone").value= "";
    document.getElementById("contactemail").value= "";
}

// const dangerbtn = document.querySelector('.btn-danger');
// dangerbtn.addEventListener('click', () => {
//     console.log(' in start');
//     if(!confirm("Are you sure?"))
//     {
//         return false;
//         // window.location.assign('/businesscontacts/login');
//     }    
//   });
