allCards = document.querySelectorAll(".card");
firstCard= null;
secondCard = null;
canClick =true;
score = 0;
allCards.forEach(card => {
  card.addEventListener("click" ,handelCardClicked);
  
});


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
if(img1== img2){
  console.log("matching")
  firstCard = null;
  secondCard = null;
  score++;
  if(score==6){gameOver()}
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
function gameOver(){
  setTimeout(()=>{
retval = confirm("game over");
if(retval ==true){
  location.reload();
}
  },1000)
}

allCards.forEach(card=>{
  randomPostions = Math.floor(Math.random()*12);
  card.style.order = randomPostions;
})
if(localStorage.getItem("userName")&&localStorage.getItem("email")!=null){
  var userNameStorge=localStorage.getItem("userName");
  var userInterface = document.getElementById("name");
  userInterface.innerText = userNameStorge;
  var emailStorge = localStorage.getItem("email");
  var emailDom = document.getElementById("email");
  emailDom.innerText = emailStorge;
 }
popup = document.getElementById("popup")

function openPopUp(){
    popup.classList.add("open-popup")
}
function closePopUp(){
    popup.classList.remove("open-popup")
}