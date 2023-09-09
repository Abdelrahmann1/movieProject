allCards = document.querySelectorAll(".card");
firstCard= null;
secondCard = null;
canClick =true;
score = 2;
allCards.forEach(card => {
  card.addEventListener("click" ,handelCardClicked);
  
});

function changeScore(){
  var userInterfaceScore = document.getElementById("scoreTime");
  userInterfaceScore.value = userNameStorge;
  userInterfaceScore.innerText = score;
}
// handle clicking on card
function handelCardClicked(){
  if(!canClick) return;
  if(this.classList.contains("flip"))return;
  this.classList.add("flip");
  if(!firstCard) firstCard = this;
  else  if( !secondCard ) secondCard = this;
  console.log(firstCard,secondCard)

  img1 = firstCard ? firstCard.firstElementChild.src:null;
  img2 = secondCard ? secondCard.firstElementChild.src:null;
console.log(img1,img2);
if(img1 == img2){
  console.log("matching")
  firstCard = null;
  secondCard = null;
  score++;
  if(score==8){gameOver()}
}
else if(img1&&img2){
  canClick = false;
 setTimeout(()=>{
  firstCard.classList.remove("flip")
  secondCard.classList.remove("flip")
  firstCard = null;
  secondCard = null;
  canClick = true;

 },1000)

}
}
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
        retvaal = confirm("You wanna play");
        if (retvaal) {
          setTimer();
        }
      },
      1000
  )
});
function gameOver(){
  setTimeout(()=>{
    openPopUpWithButton(text= "game over your time is: "+getTime().minutes +" : "+getTime().seconds )
    stopTimer()
  },1000)
}

allCards.forEach(card=>{
  randomPostions = Math.floor(Math.random()*12);
  card.style.order = randomPostions;
})
if(localStorage.getItem("userName")){
  var userNameStorge=localStorage.getItem("userName");
  var userInterface = document.getElementById("name");
  userInterface.innerText = userNameStorge;
 }
function openPopUpWithButton(text){
  popup.classList.add("open-popup");
  popupText = document.getElementById("response");
  popupText.innerText = text;

}function reloadPage() {
  location.reload();
  
}
function closePopUp(){
    popup.classList.remove("open-popup");
    window.history.go(-1)
}


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var intervalId;

function setTimer() {
  intervalId = setInterval(setTime, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function getTime() {
  return {
    minutes: parseInt(totalSeconds / 60),
    seconds: totalSeconds % 60
  };
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

 