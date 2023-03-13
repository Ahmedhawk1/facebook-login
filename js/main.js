function check(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var error = document.getElementById("error");
    var errorr = document.getElementById("errorr");


    if(username.value.length < 11 ||username.value.indexOf("@") == -1){
        username.style.borderColor="red";
        error.style.color ="red";
        error.innerHTML ="The email address or mobile number you entered isn't connected to an account. Find your account and log in.";
        return false;
    }

    else if(password.value.length<8){
    password.style.borderColor='red';
    errorr.style.color="red";
    errorr.innerHTML ="wrong password";
    return false;
}
    else {

        username.style.borderColor='blue';
        password.style.bordercolor="blue";
           return true;
    }

}