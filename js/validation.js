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
        // check weather input field is empty or not
        firstnameError.innerHTML = "Please enter firstname";
        return true
    }else if(!/^[a-zA-Z ]+$/.test(firstname)){
        // check using regex wheather firstname firstname is character or only
        firstnameError.innerHTML = "firstname must contains character only";
        return true
    }else{
        firstnameError.innerHTML = ""
        return false
    }
})
$('input[name=lastname]').on('input',function () {
    let lastname = getDiv("lastname").value
    let lastnameError = getDiv("lastnameError")
    if (isStringInValid(lastname)) {
        // check weather input field is empty or not
        lastnameError.innerHTML = "Please enter lastname";
        return true
    }else if(!/^[a-zA-Z ]+$/.test(lastname)){
        // check using regex wheather lastname lastname is character or only
        lastnameError.innerHTML = "lastname must contains character only";
        return true
    }else{
        lastnameError.innerHTML = ""
        return false
    }
})
$('input[name=email]').on('input',function () {
    let email = getDiv("email").value
    let emailError = getDiv("emailError")
    if (isStringInValid(email)) {
        // check weather input field is empty or not
        emailError.innerHTML = "Please enter email";
        return true
    }else if(!/^[a-zA-Z ]+$/.test(email)){
        // check using regex wheather email email is character or only
        emailError.innerHTML = "email must contains character only";
        return true
    }else{
        emailError.innerHTML = ""
        return false
    }
})
$('input[name=birthday]').on('input',function () {
    let birthday = getDiv("birthday").value
    let birthdayError = getDiv("birthdayError")
    if (isStringInValid(birthday)) {
        // check weather input field is empty or not
        birthdayError.innerHTML = "Please enter birthday";
        return true
    }else if(!/^[a-zA-Z ]+$/.test(birthday)){
        // check using regex wheather birthday birthday is character or only
        birthdayError.innerHTML = "birthday must contains character only";
        return true
    }else{
        birthdayError.innerHTML = ""
        return false
    }
})
$('input[name=username]').on('input',function () {
    let username = getDiv("username").value
    let usernameError = getDiv("usernameError")
    if (isStringInValid(username)) {
        // check weather input field is empty or not
        usernameError.innerHTML = "Please enter username";
        return true
    }else if(username.length<5){
        // check using regex wheather username is character or only
        usernameError.innerHTML = "username must contains 5 character";
        return true
    }else{
        usernameError.innerHTML = ""
        return false
    }
})
$('input[name=password]').on('input',function () {
    let password = getDiv("password").value
    let passwordError = getDiv("passwordError")
    if (isStringInValid(password)) {
        // check weather input field is empty or not
        passwordError.innerHTML = "Please enter password";
        return true
    }else if(!/^[a-zA-Z ]+$/.test(password)){
        // check using regex wheather password is character or only
        passwordError.innerHTML = "password must contains character only";
        return true
    }else{
        passwordError.innerHTML = ""
        return false
    }
})
$('input[name=repassword]').on('input',function () {
    let repassword = getDiv("repassword").value
    let password = getDiv("password").value
    let repasswordError = getDiv("repasswordError")
    if (isStringInValid(repassword)) {
        // check weather input field is empty or not
        repasswordError.innerHTML = "Please enter repassword";
        return true
    }else if (password !=repassword){
        repasswordError.innerHTML = "password doesnot match";
        return true
    }
    else if(!/^[a-zA-Z ]+$/.test(repassword)){
        // check using regex wheather repassword is character or only
        repasswordError.innerHTML = "repassword must contains character only";
        return true
    }else{
        repasswordError.innerHTML = ""
        return false
    }
})
// check string is empty or not
let isStringInValid = (string) => {
    return !string || !string?.trim()
}