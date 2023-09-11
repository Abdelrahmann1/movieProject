const span = document.querySelector('.hover-btn2');
const overlay = document.querySelector('.overlay');
var background_audio = new Audio('../assets/audio/background.mp3');
var cheer = new Audio('../assets/audio/clap.mp3');
cheer.muted = true;
background_audio.muted = true;
background_audio.loop = true;

var interval;

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
    //TODO radial gradianet
    // holo.css = 'background', ` radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);`;
})
// //////////////////////////? OSCAR ////////////////////
window.onLoad = Prep();
function Prep(){
    windHeight = window.innerHeight;
    windWidth = window.innerWidth;
    
    image_Element = document.getElementById("oscar");
    image_Height = image_Element.clientHeight;
    image_Width = image_Element.clientWidth;
    
    availSpace_V = windHeight - image_Height;
    availSpace_H = windWidth - image_Width;
    
    var changeInterval = 5000;
    interval = setInterval(moveImage, changeInterval);
    background_audio.muted = false;
    background_audio.play();
}

function moveImage(){
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);
    
    image_Element.style.top = randNum_V + "px";
    image_Element.style.left = randNum_H + "px";
}

image_Element.addEventListener('click', () => {
    overlay.classList.add('is-open');
    clearInterval(interval); 
    document.body.style.cursor = 'default';
    background_audio.pause();
    cheer.muted = false;
    cheer.play();
    setTimeout(function () { alert("Winner Winner Chicken Dinner");}, 2000);
    setTimeout(function () { window.history.back()}, 3000);
})