var passwordStorge=localStorage.getItem("password")
var emailStorge=localStorage.getItem("email")
var PasswordInput = document.getElementById("password")  
var emialInput = document.getElementById("email")
console.log(emailStorge,passwordStorge)

function login(){
    console.log(emialInput.value);
    if(emialInput.value==emailStorge&&PasswordInput.value==passwordStorge){
        alert("done")

    }else if(emialInput.value!=emailStorge){
        alert("email is not correct")
    }else if(passwordStorge!=PasswordInput.value){
        alert("password is not match")
    }
    
}
