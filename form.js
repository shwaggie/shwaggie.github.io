function submitForm() {
    validateForm();
}

function validateForm() {
    clearForm(false);
    let validated = true;
    let fields = [];
    let username = document.getElementById('username').value;
    let vUser = validateUsername(username);
    fields.push(vUser);

    let email = document.getElementById('email').value;
    let vEmail = validateEmail(email);
    fields.push(vEmail);

    let phone = document.getElementById('phone').value;
    let vPhone = validatePhone(phone);
    fields.push(vPhone);

    let pass1 = document.getElementById('password1').value;
    let vPass1 = validatePassword(pass1);
    fields.push(vPass1);

    let selector = document.querySelector('input[name="gender"]:checked');    
    let vGender = validateGender(selector);
    fields.push(vGender);

    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let year = document.getElementById('year').value;
    let vBirthday = validateBirthday(month, day, year);
    fields.push(vBirthday);

    let messager = document.getElementById('messager');
    let message = "";
    for (let field of fields) {
        if (field.valid < 0) {
            message += field.message + '<span class="empty">'+ field.field + '</span><br>';
            validated = false;
        }
        if (!field.valid) {
            message += field.message + '<span class="invalid"> a valid '+ field.field + '</span><br>';
            validated = false;
        }
    }
    messager.innerHTML = message;

    if (validated) {
        let pass2 = document.getElementById('password2').value;
        let vPass2 = confirmPassword(pass1, pass2);
        if (!vPass2) {
            confirm("passwords do not match");
        }
        else {
            window.location.href = '../';
        }
    }


    
}

function validateUsername(username) {
    let v = {field: "Username", message: "Please Enter ", valid: 1 }
    // empty 
    if (username.length == 0){
        v.valid = -1;
        return v;
    }
    // minlength of 4, lowercase, alphanumeric
    if (username.length < 4 || username != username.toLowerCase() || !username.match(/^[0-9a-z]+$/)) {
        v.valid = 0;
        return v;
    }
    return v;
}

function validateEmail(email) {    
    let v = {field: "Email", message: "Please Enter ", valid: 1 }
    let exts = [".net", ".com", ".org", ".edu"]
    //empty    
    if (email.length == 0){
        v.valid = -1
        return v;
    }
    // @ symbol, ends in domain extension
    if (email.indexOf("@") < 0 || email.length < 4 || exts.indexOf(email.slice(-4)) < 0) {
        return false;
    }
    return v;
}

function validatePhone(phone) {
    let v = {field: "Phone Number", message: "Please Enter ", valid: 1 }
    //empty    
    if (phone.length == 0){
        v.valid = -1;
        return v;
    }
    // phone number regex
    if (!phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
        v.valid = 0;
        return v;
    }
    return v;
}

function validatePassword(password) {
    let v = {field: "Password", message: "Please Enter ", valid: 1 }
    //empty
    if (password.length == 0) {
        v.valid = -1;
        return v;
    }
    //
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])/)) {
        v.valid = 0
        return v;
    }
    return v;
}

function validateGender(gender) {    
    let v = {field: "Gender", message: "Please Select ", valid: 1 }
    if (gender == null) {
        v.valid = -1;
        return v;
    }
    return v;
}


function validateBirthday(month, day, year) {
    let v = {field: "Birthday", message: "Please Select ", valid: 1 }
    if (month.length == 0 || day.length == 0 || year.length == 0) {
        v.valid = -1;
        return v;
    }
    return v;
}

function confirmPassword(password1, password2) {    
    if (password2 !== password1) {
        return false;
    }
    return true;
}

function clearForm(full) {
    document.getElementById('messager').innerHTML = "";
    if (full) { document.getElementById('myForm').reset(); }
}
