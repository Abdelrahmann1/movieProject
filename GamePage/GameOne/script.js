
const counterGrass=50;
const pokeBalls=5;
const player=document.querySelector(".player")
let plyerpos ={
    x:0,
    y:0,
};
let plyerval={
    x:0,
    y:0,

} 
const startPlayerPosition ={
    x:window.innerWidth/2,
    y:window.innerHeight/2,

} 

const playerSpeed=1.8; 

const sound=new Audio("assets/coin.mp3");
let score = document.createElement("div"); 
score.classList.add("score");
let scoreValue=0;
score.innerHTML=scoreValue;
score.style.color="blue";
score.style.fontSize="100px";
document.body.appendChild(score); 



//////Game functions////// 
function start(){ 
    genertRandomGrass();
    genertRandomPokeBalls();
    plyerpos=startPlayerPosition;

    
};

function update(){
    plyerpos.x += plyerval.x; 
    plyerpos.y += plyerval.y;
    player.style.left = plyerpos.x + "px";
    player.style.top = plyerpos.y + "px";
    checkCollisions()
    requestAnimationFrame(update)
    
};  

function genertRandomGrass(){
    for(let count=0;count<counterGrass;count++){
        const newGrass=document.createElement("div");
        newGrass.classList.add("grass")
        newGrass.style.left=Math.random()*100+"%"
        newGrass.style.top=Math.random()*100+"%"
        document.body.appendChild(newGrass)


}} 

function genertRandomPokeBalls(){
    for(let count=0;count<pokeBalls;count++){
        const newPokeBalls =document.createElement("div");
        newPokeBalls.classList.add("pokeball");
        newPokeBalls.style.left=Math.random()*100+"%"
        newPokeBalls.style.top=Math.random()*100+"%"
        document.body.appendChild(newPokeBalls);
    }
} 

//////////////////////handeled player movement/////// 
window.addEventListener("keydown",function(e){ 
    if(e.key=="ArrowUp"){
        plyerval.y=-1*playerSpeed;
        player.style.backgroundImage = "url('assets/player_front.png')";
    }if(e.key=="ArrowDown"){
        plyerval.y=1*playerSpeed;
        player.style.backgroundImage = "url('assets/player_back.png')";
    }if(e.key=="ArrowLeft"){
        plyerval.x=-1*playerSpeed;
        player.style.backgroundImage = "url('assets/player_left.png')";
    }if(e.key=="ArrowRight"){
        plyerval.x=1*playerSpeed;
        player.style.backgroundImage = "url('assets/player_right.png')";
    } 
    player.classList.add("walk");


});  

window.addEventListener("keyup",function(e){
    plyerval.x=0;
    plyerval.y=0;
    player.classList.remove("walk");
}); 

function youWin() {
    alert("you win!");
    window.location.reload();
}

function checkCollisions(){
    balls=document.querySelectorAll(".pokeball")
    balls.forEach((ball) => {

        if (collision(ball, player)) {
            scoreValue++;
            
            score.innerHTML=scoreValue;
            if(scoreValue==10){
                score.innerHTML=scoreValue;
                console.log("you win");
                setTimeout(youWin ,300);
                
                
               
                };
               

          ball.style.left = Math.random() * 100 + "%";
          ball.style.top = Math.random() * 100 + "%";
          sound.play(); 

        
    }}); 
    
}  





// ============= Check collision between 2 divs ===========
function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;
    var y1 = $div1.getBoundingClientRect().top;
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;
    var b1 = y1 + h1;
    var r1 = x1 + w1;
  
    var x2 = $div2.getBoundingClientRect().left;
    var y2 = $div2.getBoundingClientRect().top;
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth;
    var b2 = y2 + h2;
    var r2 = x2 + w2;
  
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

////////run the game////// 
start();
update();