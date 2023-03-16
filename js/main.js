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




//register 
function register() {
  var firstName = document.getElementById("firstName");
  var surName = document.getElementById("surName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");


  if (firstName.value.length < 3) {
    firstName.style.borderColor = "red";
    return false;
  } else {
    firstName.style.borderColor = "green";
  }



  if (surName.value.length < 3) {
    surName.style.borderColor = "red";
    return false;
  } else {
    surName.style.borderColor = "green";
  }



  if (email.value.length < 10 || !email.value.includes("@")) {
    email.style.borderColor = "red";
    return false;
  } else {
    email.style.borderColor = "green";
  }



  if (password.value.length < 8) {
    password.style.borderColor = "red";
    return false;
  } else {
    password.style.borderColor = "green";
  }


  return true;
}


















