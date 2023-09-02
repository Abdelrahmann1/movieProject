// (async function getpopular() {
//     var data = await fetch("http://api.themoviedb.org/3/movie/popular?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
//     mostPop = await data.json();
//     console.log(mostPop);
//     var x = $("#mostPoupler");
//     console.log(x);
//     for (let i = 0; i < 18; i++) {
    
//     // console.log(allGener(i));
//     var card = `<div class="card" onclick = "getTheMovie(this)">
//     <div class="poster">
//     <img src="https://image.tmdb.org/t/p/w500${mostPop.results[i].poster_path}">
    
//     </div>
//     <div class="details">
//     <i class="fa-solid" :"fa-regular"} fa-heart favorite"
//     id="favorite" 
    
//     onclick= "toggleFav(${mostPop.results[i].id},this)" ></i> 
    
    
//     <h2> ${mostPop.results[i].title}  </h2>
//     <p>${mostPop.results[i].release_date}  </p>
//     <p id="rating">${mostPop.results[i].vote_average}</p>
    
//     <div id="tags"> <span id="firstgener">20</span> 
//      </div>
    
//     </div>
    
//     </div>` ;
    
        
//     $("#mostPoupler").append(
//         card
//     )
    
    
    
//     }
    
//     })();


       
    

    