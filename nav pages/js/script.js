
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

// 

    
var topRated;
(async function getTopRated() {
    var data = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    topRated = await data.json();


   
            function getFirstGener(i,x) {  
              return genersList[topRated.results[i].genre_ids[x]];
            }
            

            
  
    for (let i = 0; i < 18; i++) {

        // console.log(allGener(i));
    var card = `<div class="card" onclick="getTheMovie(this)">
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${topRated.results[i].poster_path}">
       
    </div>
    <div class="details">
     <i class="fa-regular fa-heart" id="favorite" onclick="addToFavorite(${topRated.results[i].id}, this)"></i> 
        <h2> ${topRated.results[i].title}  </h2>
        <p>${topRated.results[i].release_date}  </p>
        <p id="rating">${topRated.results[i].vote_average}</p>
        
        <div id="tags"> <span id="firstgener">${getFirstGener(i,0)}</span> 
         </div>

    </div>
    
    </div>` ;

        $("#cardContainer").append(card);
        // alert(list[]);
    }
    })();
    // 
    // topRated.results[i].genre_ids[0];


   function addToFavorite(id,elem) {
    
        arr.push(id);
        localStorage.setItem("favoriteList",JSON.stringify(arr));
       $(elem).addClass("fa-solid fa-heart");
    
       
    //    console.log(arr);
    }

    



    function getFavorite(){
        // console.log(arr);
        // let items = (JSON.parse(localStorage.getItem("favoriteList")));

        
        // console.log(items);
        console.log(selctedMovies.length);
        for (let i = 0; i < selctedMovies.length; i++) {
        //    console.log(topRated.results[i].find(arr[i]));

        let obj =  topRated.results.find( o => o.id === selctedMovies[i]);
        console.log(obj);
        
                var favoritecard = `<div class="card" onclick="getTheMovie(this)">
    <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${obj.poster_path}">
       
    </div>
    <div class="details">
     <i class="fa-regular fa-heart" id="favorite" onclick="addToFavorite(${obj.id}, this)"></i> 
        <h2> ${obj.title}  </h2>
        <p>${obj.release_date}  </p>
        <p id="rating">${obj.vote_average}</p>
        
        <div id="tags"> <span id="firstgener">0</span> 
         </div>

    </div>
    
    </div>` ;
    $("#favoriteContainer").append(favoritecard);
            }
        }
        
        
   
    
    


    function getTheMovie(movie){ 
       console.log(movie); 
       
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
    








