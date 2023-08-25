
function mylogin(){

var passwordStorge=localStorage.getItem("password")
var emailStorge=localStorage.getItem("email")
var PasswordInput = document.getElementById("password")  
var emialInput = document.getElementById("email")

console.log(emailStorge,passwordStorge)
    if(emialInput.value==emailStorge&&PasswordInput.value==passwordStorge){
        var responseTitle = document.getElementById("responseTitle")
        responseTitle.innerHTML = "Thank You!"

        var response = document.getElementById("response")
        response.innerHTML = "congratulations "
        openPopUp();
      


    }else if(emialInput.value!=emailStorge){

        var responseTitle = document.getElementById("responseTitle")
        responseTitle.innerHTML = "Worning"
        var response = document.getElementById("response")
        response.innerHTML = "email is not correct"

      
        openPopUp();
        event.preventDefault();

    }else if(passwordStorge!=PasswordInput.value){
        var responseTitle = document.getElementById("responseTitle")
        responseTitle.innerHTML = "Worning"
        
        var response = document.getElementById("response")
        response.innerHTML = "password is not match"
        openPopUp();
        event.preventDefault();
    }

    
}

popup = document.getElementById("popup")


function openPopUp(){
    popup.classList.add("open-popup")
}
function closePopUp(){
    popup.classList.remove("open-popup")
}

