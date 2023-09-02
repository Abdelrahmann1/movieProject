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
function getFirstGener(i,x) {  
    return genersList[topRated.results[i].genre_ids[x]];
    }

let btn2 = document.getElementById("btn2");
window.onscroll=function(){
    if(scrollY>=532.55810546875){
        btn2.style.display="block";
    }else{
        btn2.style.display="none";
    } 

}; 


btn2.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
};  
 ////////////////////////////////// 





var x;
(async function getTopRated() {
    var data = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    x = await data.json();
    console.log(x.results[0])
    for (let i = 0; i < 18; i++) {
        
    var card = `<div class="card" ">
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${x.results[i].poster_path}">
       
    </div>
    <div class="details">
     <i class="fa-regular fa-heart" id="favorite" ></i> 
        <h2> ${x.results[i].title}  </h2>
        <p>${x.results[i].release_date}  </p>
        <p id="rating">${x.results[i].vote_average}</p>
        <div id="tags"> <span>${getFirstGener(i,0)}</span> <span>Drama</span> </div>
    </div>
    
    </div>` ;
        
       $("#mostViewddiv").append("Bilal")
    }
    })();


   
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

    
    
  




 
// var isSelected = false;
    









 
(async function getTopRated() {
    var data = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    topRated = await data.json();


    const favoriteCards = [];

    for (let i = 0; i <4; i++) {
        
    var card = `<div class="card" >
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}">
       
    </div>
    <div class="details">
     <i class="fa-regular fa-heart" id="favorite" ></i> 
        <h2> ${topRated.results[i].title} </h2>
        <p>${topRated.results[i].release_date}  </p>
        <p id="rating">${Number(topRated.results[i].vote_average).toFixed(1)}</p>
        <div id="tags"> <span>${getFirstGener(i,0)}</span> <span>${getFirstGener(i,1)}</span> </div>
    </div>
    
    </div>` ;
        $(".cards2").append(card);
        
        
    }
    })();   

    /////////////////////////////////////////////////////// 

   
(async function getTopRated() {
    var data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    topRated = await data.json();


    const favoriteCards = [];

    for (let i = 0; i <4; i++) {
        
    var card = `<div class="card" >
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}">
       
    </div>
    <div class="details">
     <i class="fa-regular fa-heart" id="favorite" ></i> 
        <h2> ${topRated.results[i].title} </h2>
        <p>${topRated.results[i].release_date}  </p>
        <p id="rating">${Number(topRated.results[i].vote_average).toFixed(1)}</p>
        <div id="tags"> <span>${getFirstGener(i,0)}</span></div>
    </div>
    
    </div>` ;
        $(".cards3").append(card);
        
        
    }
    })();  

    /////////////////////////////////////////// 

    var nowPlaying;
    (async function getTopRated() {
        var data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
        nowPlaying = await data.json();
    
        for (let i = 0; i <4; i++) {
            
        var card = `<div class="card" >
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${nowPlaying.results[i].poster_path}">
           
        </div>
        <div class="details">
        <i class="${(selctedMovies.includes(topRated.results[i].id))?"fa-solid" :"fa-regular"} fa-heart favorite"
        id="favorite" 
        
        onclick= "toggleFav(${topRated.results[i].id},this)" ></i> 
            <h2> ${nowPlaying.results[i].title} </h2>
            <p>${nowPlaying.results[i].release_date}  </p>
            <p id="rating">${Number(topRated.results[i].vote_average).toFixed(1)}</p>
            <div id="tags"> <span>${getFirstGener(i,0)}</span> <span>Drama</span> </div>
        </div>
        
        </div>` ;
            $(".cards4").append(card);
        }
            
        }



})();
        

function getTicket(title) {
    console.log(toString(title));
}