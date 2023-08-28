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
        <div id="tags"> <span>Action</span> <span>Drama</span> </div>
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
    









 

 

