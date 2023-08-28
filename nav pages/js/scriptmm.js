let btn =document.getElementById("btn");
window.onscroll=function(){
    if(scrollY>=532.55810546875){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    } 

}; 


btn.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"

    })
};  
 ////////////////////////////////// 

 
var topRated;
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
        <p id="rating">${topRated.results[i].vote_average}</p>
        <div id="tags"> <span>Action</span> <span>Drama</span> </div>
    </div>
    
    </div>` ;
        $(".cards2").append(card);
        
        
    }
    })();  

    // $( function() {
    //     $( ".cards2" ).slider();
    //   } );


 

