function validate() {
    let reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let rePhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("phone").value;
    if (document.contact.fname.value == ""){
        alert ("Please provide your first name!");
        document.contact.fname.focus();
        return false;
    }

    if (document.contact.lname.value == ""){
        alert ("Please provide your last name!");
        document.contact.lname.focus();
        return false;
    }

    if (reEmail.test(emailInput) == false){
        alert ("Please enter a valid email address!");
        document.contact.email.focus();
        return false;
    }

    if (rePhone.test(phoneInput) == false){
        alert ("Please enter a valid phone number!");
        document.contact.phone.focus();
        return false;
    }

    if (document.contact.input.value == ""){
        alert ("Please write a question!");
        document.contact.input.focus();
        return false;
    }

}