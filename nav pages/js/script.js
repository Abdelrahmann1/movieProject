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


function getFirstGener(i,x,list) {  
return genersList[list.results[i].genre_ids[x]];
}

function getFavoriteGener(i,x) {  
return genersList[selctedMovies[i]];
}


var topRated;
(async function getTopRated() {
var data = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
topRated = await data.json();


for (let i = 0; i < 20; i++) {

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

<div id="tags">
        ${getFirstGener(i, 0, topRated) !== undefined ? ` <span>${getFirstGener(i, 0, topRated)}</span>` : ""} 
        ${getFirstGener(i, 1, topRated) !== undefined ?` <span>${getFirstGener(i, 1, topRated)}</span>` : ""} 
    </div>

</div>

</div>` ;

$("#cardContainer").append(card);



}

})();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
   

    var playingNow;
(async function nowPlaying(){ 
   var Response =await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce3ad943eaffe233b9fe1d4450ba6c")
   playingNow = await Response.json();
   
   
   $("#second-carousal").append(`<img style="filter: blur(2px)" src="https://image.tmdb.org/t/p/w500${playingNow.results[5].poster_path}" class="d-block w-100" " alt="...">`)  
   $("#second-carousal").append(`<div class="carousel-caption">
   <p class="h1 text-light shadow shadow-lg " style="text-shadow: 4px 4px black;" > ${playingNow.results[5].title} </p>
   <button type="button" class="btn btn-danger btn-lg btn-block  my-5"> Get Tickets Now </button>
   <!-- <button type="button" class="btn btn-danger my-5 btn-lg">Large button</button> -->
   <p class="bg-black bg-opacity-75 rounded p-2">${playingNow.results[5].overview} </p>
   </div>`)  

   $("#third-carousal").append(`<img style="filter: blur(2px)" src="https://image.tmdb.org/t/p/w500${playingNow.results[7].poster_path}" class="d-block w-100"  alt="..."> `)  
   $("#third-carousal").append(`<div class="carousel-caption">
<p class="h1 text-light shadow shadow-lg " style="text-shadow: 4px 4px black;" > ${playingNow.results[7].title} </p>

<button type="button" class="btn btn-lg  btn-block btn-danger my-5" > Get Tickets Now </button>

<!-- <button type="button" class="btn btn-danger my-5 btn-lg" style = "color:red">Large button</button> -->
<p class="bg-black bg-opacity-75 rounded p-2">${playingNow.results[7].overview} </p>
</div>`)   

$("#first-carousal").append(`<img style="filter: blur(2px)" src="https://image.tmdb.org/t/p/w500${playingNow.results[3].poster_path}" class="d-block w-100"  alt="...">`)   
$("#first-carousal").append(`<div class="carousel-caption">
<p class="h1 text-light shadow shadow-lg " style="text-shadow: 4px 4px black  ;" > ${playingNow.results[3].title} </p>
<button type="button" class="btn btn-danger btn-lg btn-block  my-5"> Get Tickets Now </button>
<!-- <button type="button" class="btn btn-danger my-5 btn-lg">Large button</button> -->
<p class="bg-black bg-opacity-75 rounded p-2">${playingNow.results[3].overview} </p>
</div>`)   
    for (let i = 0; i < 20; i++) {

        
$("#NowPlayingContainer").append(`
</div>
<div class="card">
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${playingNow.results[i].poster_path}" alt="">
       
    </div>
    <div class="details">
    <i class="${(selctedMovies.includes(playingNow.results[i].id))?"fa-solid" :"fa-regular"} fa-heart favorite"
    id="favorite" 
    
    onclick= "toggleFav(${playingNow.results[i].id},this)" ></i> 
        <h2>${playingNow.results[i].title} </h2>
        <p> ${playingNow.results[i].release_date} </p>
        <p id="rating"> ${Number(playingNow.results[i].vote_average).toFixed(1)}</p>
        <div id="tags">
        ${getFirstGener(i, 0, playingNow) !== undefined ?` <span>${getFirstGener(i, 0, playingNow)}</span>` : ""} ${getFirstGener(i, 1, playingNow) !== undefined ?` <span>${getFirstGener(i, 1, playingNow)}</span>` : ""} 
    </div>

</div>`);
    }

    let ticketButton = document.getElementsByClassName("btn-danger");

    for (let i = 0; i < ticketButton.length; i++) {
    
        ticketButton[i].addEventListener("click", goToTickets);
    }
   
 
})()
 
function goToTickets() {
    window.location = "../../booking/booking.html";
    
}

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

function getFavorite() {
    getTopRatedFavorite();
    getNowPlayingFavorite();
}

 function getTopRatedFavorite(){
// console.log(arr);
// let items = (JSON.parse(localStorage.getItem("favoriteList")));
// console.log(items);
console.log(selctedMovies.length);
for (let i = 0; i < selctedMovies.length; i++) {
//    console.log(topRated.results[i].find(arr[i]));

let obj = topRated.results.find( o => o.id === selctedMovies[i]);
    console.log(obj.title) ;


        let favoritecard = `<div class="card" onclick="getTheMovie(this)">
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

function getNowPlayingFavorite(){
    // console.log(arr);
    // let items = (JSON.parse(localStorage.getItem("favoriteList")));
    // console.log(items);
    console.log(selctedMovies.length);
for (let i = 0; i < selctedMovies.length; i++) {
//    console.log(topRated.results[i].find(arr[i]));

let obj = playingNow.results.find( o => o.id === selctedMovies[i]);
    console.log(obj.title);


        let favoritecard = `<div class="card" onclick="getTheMovie(this)">
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


$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#menu-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});




async function getpopular() {
    var data = await fetch("http://api.themoviedb.org/3/movie/popular?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    mostPop = await data.json();
    console.log(mostPop);
    var x = $("#mostPoupler");
    console.log(x);
    for (let i = 0; i < 20; i++) {
    
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
    
    <div id="tags">
    ${getFirstGener(i, 0, mostPop) !== undefined ? ` <span>${getFirstGener(i, 0, mostPop)}</span>` : ""} 
    ${getFirstGener(i, 1, mostPop) !== undefined ?` <span>${getFirstGener(i, 1, mostPop)}</span>` : ""} 
    </div>
    
    </div>
    
    </div>` ;
    
        
    $("#mostPoupler").append(
        card
    )
    
    }
    
    };


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

var inputElement = $("#movie-name")[0]

var movieWrapper = $("#movie-wrapper")

var input =  $(".form-control")[0];
var myinput = document.getElementById("search")[0];
console.log(movieWrapper)



function loadingData() {
    // localStorage.setItem("movieSearch",input.value);
        const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('searchValue');
  console.log(greetingValue);
}

async function getSearch() {

    

//      sessionStorage.setItem("searchString",input.value);
//    var searchString =sessionStorage.getItem("searchString");

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWI2ZGZlOTI5ZmVjM2M0YWMzYmQ4MzI2YTAzMzQyZSIsInN1YiI6IjY0NzMzYzIzZGQ3MzFiMmQ3OWQxODM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMM2Sh6hL8bC2f8Kv1pc7gZZ4BoHF4q8fRDnM3lTFdE'
        }
      };
    //   console.log(input.value);
      var mydata ;
    var data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input.value}&include_adult=false&language=en-US&page=1`, options);
    
        mydata = await data.json();
        console.log(mydata);


      var mySearch = document.getElementById("SearchContainer");
      mySearch.innerHTML= "";
    //   $("#SearchContainer").append(" ");
    
    function load() {
        
        
    }
        for (let i = 0; i < mydata.results.length; i++) {
            
            $("#SearchContainer").append(
                `
                <div class="card" onclick = "getTheMovie(this)">
      <div class="poster">
      <img src="https://image.tmdb.org/t/p/w500${mydata.results[i].poster_path}">
      
      </div>
      <div class="details">
      <i class="fa-solid" :"fa-regular"} fa-heart favorite"
      id="favorite" 
      
      onclick= "toggleFav(${mydata.results[i].id},this)" ></i> 
      
      
      <h2> ${mydata.results[i].title}  </h2>
      <p>${mydata.results[i].release_date}  </p>
      <p id="rating">${Number( mydata.results[i].vote_average).toFixed(1)}</p>
      
      <div id="tags"> <span id="firstgener">20</span> 
       </div>
      
      </div>
      
      </div>

                `
            )
            }}

var inputElement = $("#movie-name")[0]

var movieWrapper = $("#movie-wrapper")

var input =  $(".form-control")[0];
var myinput = document.getElementById("search")[0];
console.log(movieWrapper)


async function getSearch() {


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWI2ZGZlOTI5ZmVjM2M0YWMzYmQ4MzI2YTAzMzQyZSIsInN1YiI6IjY0NzMzYzIzZGQ3MzFiMmQ3OWQxODM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMM2Sh6hL8bC2f8Kv1pc7gZZ4BoHF4q8fRDnM3lTFdE'
        }
      };
    //   console.log(input.value);
      var mydata ;
    var data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${input.value}&include_adult=false&language=en-US&page=1`, options);
    
        mydata = await data.json();
        console.log(mydata);


      var mySearch = document.getElementById("SearchContainer");
      mySearch.innerHTML= " ";
    //   $("#SearchContainer").append(" ");
    
    function load() {
        
        
    }
        for (let i = 0; i < mydata.results.length; i++) {
            
            $("#SearchContainer").append(
                `
                <div class="card" onclick = "getTheMovie(this)">
      <div class="poster">
      <img src="https://image.tmdb.org/t/p/w500${mydata.results[i].poster_path}" alt="https://image.tmdb.org/t/p/w500${mydata.results[i].backdrop_path}" >
      
      </div>
      <div class="details">
      <i class="fa-solid" :"fa-regular"} fa-heart favorite"
      id="favorite" 
      
      onclick= "toggleFav(${mydata.results[i].id},this)" ></i> 
      
      
      <h2> ${mydata.results[i].title}  </h2>
      <p>${mydata.results[i].release_date}  </p>
      <p id="rating">${Number( mydata.results[i].vote_average).toFixed(1)}</p>
      
      <div id="tags">
      ${getFirstGener(i, 0, mydata) !== undefined ? ` <span>${getFirstGener(i, 0, mydata)}</span>` : ""} 
      ${getFirstGener(i, 1, mydata) !== undefined ?` <span>${getFirstGener(i, 1, mydata)}</span>` : ""} 
  </div>
      
      </div>
      
      </div>`
            )
        }
}