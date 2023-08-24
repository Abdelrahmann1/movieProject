

function mylogin(){

var passwordStorge=localStorage.getItem("password")
var emailStorge=localStorage.getItem("email")
var PasswordInput = document.getElementById("password")  
var emialInput = document.getElementById("email")
console.log(emailStorge,passwordStorge)
    alert(emialInput.value);
    alert(emailStorge)
    alert(PasswordInput.value);
    alert(passwordStorge);
    if(emialInput.value==emailStorge&&PasswordInput.value==passwordStorge){
        alert("done")

    }else if(emialInput.value!=emailStorge){
        event.preventDefault();
        alert("email is not correct")
    }else if(passwordStorge!=PasswordInput.value){
        event.preventDefault();
        alert("password is not match")
    }

    
}
