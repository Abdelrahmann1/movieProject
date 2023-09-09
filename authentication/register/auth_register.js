var PasswordInput = document.getElementById("password");
var emialInput = document.getElementById("email");
var userNameInput = document.getElementById("userName");
function setUserInfo(){
    localStorage.setItem("userName",userNameInput.value)
    localStorage.setItem("email",emialInput.value)
    localStorage.setItem("password",PasswordInput.value)
    var response = document.getElementById("response")
    response.innerHTML = "create email successfully"
    openPopUp();
}
var popup = document.getElementById("popup")

function openPopUp(){
    popup.classList.add("open-popup")
}
function closePopUp(){
    popup.classList.remove("open-popup")
    window.location.href = " ";
    // location of page

    
}

//? mooooooooooooooooooooooood //
var eye = document.getElementById('eye');
eye.addEventListener('click',togglePass);
function togglePass(){

    eye.classList.toggle('active');
 
    (PasswordInput.type == 'password') ? PasswordInput.type = 'text' : PasswordInput.type = 'password';
}
 

// ? form validation //

function checkStuff() {
    var msg = document.getElementById('msg');
    
    if (emialInput.value == "") {
      msg.style.display = 'block';
      msg.innerHTML = "Please enter your emial";
      emialInput.focus();
      return false;
    } else {
      msg.innerHTML = "";
    }
    
     if (PasswordInput.value == "") {
      msg.innerHTML = "Please enter your password";
      PasswordInput.focus();
      return false;
    } else {
      msg.innerHTML = "";
    }
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(emialInput.value)) {
      msg.innerHTML = "Please enter a valid email";
      emialInput.focus();
      return false;
    } else {
      msg.innerHTML = "";
    }
  }