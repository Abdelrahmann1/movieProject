
function setUserInfo(){
    var emialInput = document.getElementById("email")
    var userNameInput = document.getElementById("userName")
    var PasswordInput = document.getElementById("password")
    localStorage.setItem("userName",userNameInput.value)
    localStorage.setItem("email",emialInput.value)
    localStorage.setItem("password",PasswordInput.value)
}
