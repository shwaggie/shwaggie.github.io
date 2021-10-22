function submitForm() {
    validateForm();
}

function validateForm() {
    let username = document.getElementById('username').value;
    let vUser = validateUsername(username);
    let email = document.getElementById('email').value;
    let vEmail = validateEmail(email);
    let phone = document.getElementById('phone').value;
    let vPhone = validatePhone(phone);
    let pass1 = document.getElementById('password1').value;
    let vPass1 = validatePassword(pass1);
    let pass2 = document.getElementById('password2').value;
    let vPass2 = confirmPassword(pass1, pass2);

    // validate birthday
    console.log(vPass2);
}

function validateUsername(username) {
    // empty 
    if (username == null || username.length == 0){
        return null;
    }
    // minlength of 4
    if (username.length < 4) {
        return false;
    }
    // lowercase
    if (username != username.toLowerCase()) {
        return false;
    } 
    // alphanumeric
    if (!username.match(/^[0-9a-z]+$/)) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    let exts = [".net", ".com", ".org", ".edu"]
    //empty    
    if (email == null || email.length == 0){
        return null;
    }
    // @ symbol
    if (email.indexOf("@") < 0) {
        return false;
    }
    // ends in domain extension
    if (email.length < 4) {
        return false;
    }
    if (exts.indexOf(email.slice(-4)) < 0) {
        return false;
    }
    return true;
}

function validatePhone(phone) {
    //empty    
    if (phone == null || phone.length == 0){
        return null;
    }
    // phone number regex
    if (!phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
        return false;
    }
    return true;
}

function validatePassword(password) {
    //empty
    if (password == null || password.length == 0) {
        return null;
    }
    //
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])/)) {
        return false;
    }
    return true;
}

function confirmPassword(password1, password2) {
    //empty
    if (password2 == null || password2.length == 0) {
        return null;
    }
    if (password2 !== password1) {
        return false;
    }
    return true;
}
