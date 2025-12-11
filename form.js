

function handleFormSubmit(){
    let name = document.forms["contact"]["username"].value;
    let email = document.forms["contact"]["email"].value;
    let message = document.forms["contact"]["message"].value;

    alert(name+email+message)
}