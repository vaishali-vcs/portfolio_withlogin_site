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

(function(){
    function Start()
    {
        console.log('in javascript function')
        //list of all danger buttons
        let deletebuttons = document.querySelectorAll('.btn-danger')
       
        for(button of deletebuttons)
        {
            button.addEventListener('click', (event) => {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/booklist');
            }    
        });
       }
    }
    window.addEventListener('click', Start);
})();


