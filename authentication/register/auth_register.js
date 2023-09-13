var PasswordInput = document.getElementById("password");
var emialInput = document.getElementById("email");
var userNameInput = document.getElementById("userName");
function validateFormAndSetUserInfo() {
  var emailInput = document.forms["myForm"]["email"].value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordInput = document.forms["myForm"]["password"].value;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (emailInput == "") {
    response.innerHTML = "Creating Email succsuccessfully"
    openPopUp();
    alert("Email must be filled out");
    return false;
  } else if (!emailInput.match(emailRegex)) {
    alert("Invalid email format");
    return false;
  }else if (passwordInput == "") {
    alert("Password must be filled out");
    return false;

  }else if (!passwordInput.match(passwordRegex)){
    alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.");
    return true;
    
  }
  localStorage.setItem("userName",userNameInput.value)
  localStorage.setItem("email",emialInput.value)
  localStorage.setItem("password",PasswordInput.value)
  var response = document.getElementById("response")
  response.innerHTML = "Creating Email succsuccessfully"
  openPopUp();
}
function setUserInfo(){
    localStorage.setItem("userName",userNameInput.value)
    localStorage.setItem("email",emialInput.value)
    localStorage.setItem("password",PasswordInput.value)
    var response = document.getElementById("response")
    response.innerHTML = "Creating Email succsuccessfully"
    openPopUp();
}
var popup = document.getElementById("popup")

function openPopUp(){
    popup.classList.add("open-popup")
}
function closePopUp(){
    popup.classList.remove("open-popup")
      // location.href = "../../index.html";
    TODO 
}

//? mooooooooooooooooooooooood //
var eye = document.getElementById('eye');
eye.addEventListener('click',togglePass);
function togglePass(){
    eye.classList.toggle('active');
    (PasswordInput.type == 'password') ? PasswordInput.type = 'text' : PasswordInput.type = 'password';
}
