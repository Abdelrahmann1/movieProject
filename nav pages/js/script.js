//     var Seasons = {
//         "18":'Action',
//         "12":'Animation',
// }

var arr =  (JSON.parse(localStorage.getItem("favoriteList")));
var  selctedMovies = [];





$.each(arr, function(i, el){
if($.inArray(el, selctedMovies) === -1) selctedMovies.push(el);
});

var genersList = {
    18:"action",
    12:"Adventure",
    16:"Animation",
    35:"Comedy",
    80:"Crime",
    14:"Fantasy",
    99:"Documentary",
    18 :"Drama",
    10751:"Family",
    36:"History",
     27 :"Horror", 
     10402: "Music",
     9648:"Mystery",
     10749:"Romance",
     878:"Science Fiction",
     10770:"TV Movie",
     53:"Thriller",
     10752:"War",
     37:"Western",

}

//    alert(topRated.results[0].genre_ids[0])
// 

function getFirstGener(i,x) {  
return genersList[topRated.results[i].genre_ids[x]];
}

function getFavoriteGener(i,x) {  
return genersList[selctedMovies[i]];
}


var topRated;
(async function getTopRated() {
var data = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
topRated = await data.json();


for (let i = 0; i < 18; i++) {

// console.log(allGener(i));
var card = `<div class="card" onclick = "getTheMovie(this)">
<div class="poster">
<img src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}">

</div>
<div class="details">
<i class="${(selctedMovies.includes(topRated.results[i].id))?"fa-solid" :"fa-regular"} fa-heart favorite"
id="favorite" 

onclick= "toggleFav(${topRated.results[i].id},this)" ></i> 




<h2> ${topRated.results[i].title}  </h2>
<p>${topRated.results[i].release_date}  </p>
<p id="rating">${ Number(topRated.results[i].vote_average).toFixed(1)}</p>

<div id="tags"> <span id="firstgener">${getFirstGener(i,0)}</span> 
 </div>

</div>

</div>` ;

$("#cardContainer").append(card);



}

})();

function takeTheMovie(obj) {
    alert(obj)
}
    
// (Math.round((topRated.results[i].vote_average*100)/100).toFixed(1))
function toggleFav(id,elem) {
if(elem.classList.contains("fa-regular")){
    selctedMovies.push(id);
    localStorage.setItem("favoriteList",JSON.stringify(selctedMovies));
    $(elem).removeClass("fa-regular");
   $(elem).addClass("fa-solid");
   
   
}
else if(elem.classList.contains("fa-solid")){
    var index = selctedMovies.indexOf(id);
    if (index !== -1) {
   selctedMovies.splice(index, 1);
   localStorage.setItem("favoriteList",JSON.stringify(selctedMovies));
    $(elem).removeClass("fa-solid");
   $(elem).addClass("fa-regular ");

       }
   

}
}


function addToFavorite(id,elem) {

selctedMovies.push(id);
localStorage.setItem("favoriteList",JSON.stringify(selctedMovies));
$(elem).addClass("fa-solid fa-heart");


}





function removeFromFavorite(id,elem) {
location.reload();
var index = selctedMovies.indexOf(id);
    if (index !== -1) {
   selctedMovies.splice(index, 1);
   localStorage.setItem("favoriteList",JSON.stringify(selctedMovies));
    $(elem).removeClass("fa-solid");
    $(elem).addClass("fa-regular");
    // $('#favoriteContainer').load('#favoriteContainer')
    }
    
    
}


 
 function getTopRatedFavorite(){
// console.log(arr);
// let items = (JSON.parse(localStorage.getItem("favoriteList")));
// console.log(items);
console.log(selctedMovies.length);
for (let i = 0; i < selctedMovies.length; i++) {
//    console.log(topRated.results[i].find(arr[i]));

let obj = topRated.results.find( o => o.id === selctedMovies[i]);
console.log(obj);


        var favoritecard = `<div class="card" onclick="getTheMovie(this)">
<div class="poster">
<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}">

</div>
<div class="details">
<i class="fa-solid fa-heart" id="favorite" onclick="removeFromFavorite(${obj.id}, this)"></i> 
<h2> ${obj.title}  </h2>
<p>${obj.release_date}  </p>
<p id="rating">${Number(obj.vote_average).toFixed(1)}</p>

<div id="tags"> <span id="firstgener">${genersList[obj.genre_ids[0]]}</span> 
 </div>

</div>

</div>` ;
$("#favoriteContainer").append(favoritecard);

    
    }



}







function getTheMovie(movie){ 
 
console.log(movie);
popup.classList.add("open-popup");
popup.innerHTML= toString(movie);

}



// $(document).ready(function(){
//     var favoriteIcon = document.getElementById('favorite');
//     favoriteIcon.addEventListener('click', addToFavorites);
//     function  addToFavorites(event) {
//        const card = event.target.parentNode.parentNode;
//        favoriteCards.push(card);
//        console.log(card);
//        console.log(favoriteCards);
//        // Add code to save the card as a favorite
//      }





$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#menu-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});

















// var card = ` <div class="card">
//     <div class="poster">
//         <img src="https://image.tmdb.org/t/p/w500">
   
//     </div>
//     <div class="details">
//      <i class="fa-regular fa-heart" id="favorite" ></i> 
//         <h2> ${finalResults.results[0].title}  </h2>
//         <p> Directed By quantin Tarantino </p>
//         <p id="rating">7.5</p>
//         <div id="tags"> <span>Action</span> <span>Drama</span> </div>
//     </div>

//     </div>`;


var popup = document.getElementById("popup")


// function openPopUp(){
    
// }
function closePopUp(){
    popup.classList.remove("open-popup")
}






async function getpopular() {
    var data = await fetch("http://api.themoviedb.org/3/movie/popular?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    mostPop = await data.json();
    console.log(mostPop);
    var x = $("#mostPoupler");
    console.log(x);
    for (let i = 0; i < 18; i++) {
    
    // console.log(allGener(i));
    var card = `<div class="card" onclick = "getTheMovie(this)">
    <div class="poster">
    <img src="https://image.tmdb.org/t/p/w500${mostPop.results[i].poster_path}">
    
    </div>
    <div class="details">
    <i class="fa-solid" :"fa-regular"} fa-heart favorite"
    id="favorite" 
    
    onclick= "toggleFav(${mostPop.results[i].id},this)" ></i> 
    
    
    <h2> ${mostPop.results[i].title}  </h2>
    <p>${mostPop.results[i].release_date}  </p>
    <p id="rating">${Number( mostPop.results[i].vote_average).toFixed(1)}</p>
    
    <div id="tags"> <span id="firstgener">20</span> 
     </div>
    
    </div>
    
    </div>` ;
    
        
    $("#mostPoupler").append(
        card
    )
    
    
    
    }
    
    };


        var nowPlaying ;
     async function nowPlaying(){ 
        var Response =await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce3ad943eaffe233b9fe1d4450ba6c")
         var nowPlaying = await Response.json();
         
    
         for (let i = 0; i < 18; i++) {
    
                
     $("#NowPlayingContainer").append(`
     </div>
     <div class="card">
         <div class="poster">
             <img src="https://image.tmdb.org/t/p/w500${nowPlaying.results[i].poster_path}" alt="">
            
         </div>
         <div class="details">
         <i class="${(selctedMovies.includes(nowPlaying.results[i].id))?"fa-solid" :"fa-regular"} fa-heart favorite"
         id="favorite" 
         
         onclick= "toggleFav(${nowPlaying.results[i].id},this)" ></i> 
             <h2>${nowPlaying.results[i].title} </h2>
             <p> ${nowPlaying.results[i].release_date} </p>
             <p id="rating"> ${nowPlaying.results[i].vote_average}</p>
             <div id="tags"> <span>Action</span> <span>Drama</span> </div>
         </div>
    
     </div>`);
         }
    
    
      
     }
     


// var isSelected = false;



//? nav current page //

var links = document.querySelectorAll('#menu a');

// Add a click event listener to each <a> element
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Remove the "active" class from all <a> elements
    links.forEach(function(otherLink) {
      otherLink.classList.remove('active');
    });
    // Add the "active" class to the clicked <a> element
    link.classList.add('active');
  });
});




if(localStorage.getItem("userName")){
    var elems=localStorage.getItem("userName");
    var logedInfo = document.getElementsByClassName("loged");
    var theuser =  document.getElementById("username");
    theuser.innerText = elems
    for (var i=0;i<logedInfo.length;i+=1){
        logedInfo[i].style.display = 'flex';
      }
}else{
    var notlogedInfo = document.getElementsByClassName("notLoged");
    for (var i=0;i<notlogedInfo.length;i+=1){
        notlogedInfo[i].style.display = 'block';
      }
}