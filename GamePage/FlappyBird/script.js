var hole =document.getElementById("hole");
var  wall =document.getElementById("wall");
var bird =document.getElementById("bird");
var score=0;
hole.addEventListener("animationiteration",function(){
    var random=Math.random()*(500-150);
    hole.style.top=random+"px";
    score++;
}); 


setInterval(function(){ 
var birdTop= parseInt(getComputedStyle(bird).getPropertyValue("top")); 
if(!isjumping){  
    bird.style.top=birdTop+3+"px";
}  

 /////game over/////// 

 
 var wallLeft = parseInt(
    getComputedStyle(wall).getPropertyValue("left")
  );
  let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
 if (
    birdTop > 480 ||
    (wallLeft < 20 && (birdTop > holeTop + 150 || birdTop < holeTop))
  ) {
    alert(`Game Over. Your Score: ${score}`);

    bird.style.top = 100 + "px";
    wall.style.left = "100%";
    hole.style.left = "100%";

    score = 0;
  }
},20);  

var isjumping=false;
 

document.addEventListener("click",function(){
    isjumping=true;
    var jumpTimer=0;


var id =setInterval(function(){
    jumpTimer++;
    var birdTop= parseInt(getComputedStyle(bird).getPropertyValue("top")); 
if(birdTop>0 && jumpTimer<15){
    bird.style.top=birdTop-5+"px";
} 
if(jumpTimer>20){
    clearInterval(id);
    isjumping=false;
    jumpTimer=0;
    }


},10); })  




