
function setUserInfo(){
    var emialInput = document.getElementById("email")
    var userNameInput = document.getElementById("userName")
    var PasswordInput = document.getElementById("password")
    localStorage.setItem("userName",userNameInput.value)
    localStorage.setItem("email",emialInput.value)
    localStorage.setItem("password",PasswordInput.value)
    var response = document.getElementById("response")
    response.innerHTML = "create email successfully"
    openPopUp();
}
popup = document.getElementById("popup")


function openPopUp(){
    popup.classList.add("open-popup")
}
function closePopUp(){
    popup.classList.remove("open-popup")
    
}

