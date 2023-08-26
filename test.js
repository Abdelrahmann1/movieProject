

( async function nowPlaying(){ 
    var Response =await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce3ad943eaffe233b9fe1d4450ba6c")
     var results = await Response.json();
     

     for (let i = 0; i < 18; i++) {

            
 $("#cardContainer").append(`
 </div>
 <div class="card">
     <div class="poster">
         <img src="https://image.tmdb.org/t/p/w500${results.results[i].poster_path}" alt="">
        
     </div>
     <div class="details">
      <i class="fa-regular fa-heart" class="favorite" ></i> 
         <h2>"${results.results[i].title}" </h2>
         <p> ${results.results[i].release_date} </p>
         <p id="rating"> ${results.results[i].vote_average}</p>
         <div id="tags"> <span>Action</span> <span>Drama</span> </div>
     </div>

 </div>`);
     }


  
 })() 
 
 
 
    


//  `
//         </div>
//         <div class="card">
//             <div class="poster">
//                 <img src="../assets/Inglourious Basterds (2009) 0.jpg" alt="">
                
//             </div>
//             <div class="details">
//             <i class="fa-regular fa-heart" class="favorite" ></i> 
//                 <h2>"${finalresult[0].title}" </h2>
//                 <p> Directed By quantin Tarantino </p>
//                 <p id="rating">7.5</p>
//                 <div id="tags"> <span>Action</span> <span>Drama</span> </div>
//             </div>

//         </div>`