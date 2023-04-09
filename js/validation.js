function getDiv(container) {
    return document.getElementById(container);
};
document.getElementById("register").addEventListener("click", function () {
    
    let firstname = getDiv("firstname").value
    let lastname = getDiv("lastname").value
    let email = getDiv("email").value
    let birthday = getDiv("birthday").value
    let username = getDiv("username").value
    let password = getDiv("password").value
    let re_password = getDiv("re_password").value

    // declare variables for error handling
    let firstnameError = getDiv("firstnameError")
    let lastnameError = getDiv("lastnameError")
    let emailError = getDiv("emailError")
    let birthdayError = getDiv("birthdayError")
    let usernameError = getDiv("usernameError")
    let passwordError = getDiv("passwordError")
    let repasswordError = getDiv("repasswordError")
    let error =false
    // resetError()
    

    if (isStringInValid(firstname)) {
        // check weather input field is empty or not
        firstnameError.innerHTML = "Please enter firstname";
        error = true
    }else if(!/^[a-zA-Z ]+$/.test(firstname)){
        // check using regex wheather firstname firstname is character or only
        firstnameError.innerHTML = "firstname must contains character only";
        error = true
    }
    if (isStringInValid(lastname)) {
        // check weather input field is empty or not
        lastnameError.innerHTML = "Please enter lastname";
        error = true
    }else if(!/^[a-zA-Z ]+$/.test(lastname)){
        // check using regex wheather lastname lastname is character or only
        lastnameError.innerHTML = "lastname must contains character only";
        error = true
    }
    if (isStringInValid(email)) {
        // check weather input field is empty or not
        emailError.innerHTML = "Please enter email";
        error = true
    }else if(!/^[a-zA-Z ]+$/.test(email)){
        // check using regex wheather email email is character or only
        emailError.innerHTML = "email must contains character only";
        error = true
    }


    if ((birthday=='')) {
        // check weather input field is empty or not
        sidError.innerHTML = "Please enter birthday";
        error = true
    }

    if (isStringInValid(username)) {
        // check weather input field is empty or not
        usernameError.innerHTML = "Please enter username";
        error = true
    }else if(!/^[a-zA-Z ]+$/.test(username)){
        // check using regex wheather username is character or only
        usernameError.innerHTML = "username Code must be character only";
        error = true
    }
    if (isStringInValid(password)) {
        // check weather input field is empty or not
        passwordError.innerHTML = "Please enter password";
        error = true
    }else if(!/^[a-zA-Z ]+$/.test(password)){
        // check using regex wheather password is character or only
        passwordError.innerHTML = "password Code must be character only";
        error = true
    }
    
    

    if(error){
        return false;
    }
    resetError()
    items_array.push({
        name:name,
        number:number,
        city:city
    })
    displayList(items_array)
    document.getElementById("myForm").reset();
});
$('input[name=firstname]').on('input',function () {
    let firstname = getDiv("firstname").value
    let firstnameError = getDiv("firstnameError")
    if (isStringInValid(firstname)) {
        // check if input field is empty or not
        firstnameError.innerHTML = "Please enter first name";
        return true
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        // check using regex whether firstname contains only letters
        firstnameError.innerHTML = "First name must contain only letters";
        return true
    } else {
        firstnameError.innerHTML = ""
        return false
    }
})

$('input[name=lastname]').on('input', function() {
    let lastname = getDiv("lastname").value;
    let lastnameError = getDiv("lastnameError");
  
    if (isStringInValid(lastname)) {
      lastnameError.innerHTML = "Please enter your last name";
      return true;
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
      lastnameError.innerHTML = "Last name must contain letters only";
      return true;
    } else {
      lastnameError.innerHTML = "";
      return false;
    }
  });
  
$('input[name=email]').on('input',function () {
    let email = getDiv("email").value
    let emailError = getDiv("emailError")
    if (isStringInValid(email)) {
        // check whether input field is empty or not
        emailError.innerHTML = "Please enter email";
        return true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        // check using regex whether email is in a valid format
        emailError.innerHTML = "Please enter a valid email address";
        return true
    } else {
        emailError.innerHTML = ""
        return false
    }
})

$('input[name=birthday]').on('input',function () {
    let birthday = getDiv("birthday").value
    let birthdayError = getDiv("birthdayError")
    if (isStringInValid(birthday)) {
        // check if input field is empty or not
        birthdayError.innerHTML = "Please enter birthday";
        return true
    } else {
        // check if entered value is a valid date
        let dateRegex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
        if (!dateRegex.test(birthday)) {
            birthdayError.innerHTML = "Please enter a valid date in YYYY-MM-DD format";
            return true;
        } else {
            let birthDate = new Date(birthday);
            let ageInMilliseconds = Date.now() - birthDate.getTime();
            let ageDate = new Date(ageInMilliseconds);
            let age = Math.abs(ageDate.getUTCFullYear() - 1970);

            if (age < 18) {
                birthdayError.innerHTML = "You must be at least 18 years old to register";
                return true;
            } else {
                birthdayError.innerHTML = "";
                return false;
            }
        }
    }
});


$('input[name=username]').on('input', function () {
    let username = getDiv("username").value
    let usernameError = getDiv("usernameError")
    if (isStringInValid(username)) {
        // check if input field is empty or not
        usernameError.innerHTML = "Please enter username";
        return true
    } else if (username.length < 5) {
        // check if username contains at least 5 characters
        usernameError.innerHTML = "Username must be at least 5 characters";
        return true
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        // check if username contains only alphanumeric characters and underscore
        usernameError.innerHTML = "Username must contain only letters, numbers, and underscore";
        return true
    } else {
        usernameError.innerHTML = ""
        return false
    }
})
$('input[name=repassword]').on('input',function () {
    let repassword = getDiv("repassword").value
    let password = getDiv("password").value
    let repasswordError = getDiv("repasswordError")
    if (isStringInValid(repassword)) {
        repasswordError.innerHTML = "Please enter repassword";
        return true;
    } else if (password != repassword) {
        repasswordError.innerHTML = "Passwords do not match";
        return true;
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(password)) {
        repasswordError.innerHTML = "Password must contain at least one letter, one number and one special character";
        return true;
    } else if (password.length < 8) {
        repasswordError.innerHTML = "Password must be at least 8 characters long";
        return true;
    } else {
        repasswordError.innerHTML = "";
        return false;
    }
})


// check string is empty or not
let isStringInValid = (string) => {
    return !string || !string?.trim()
}