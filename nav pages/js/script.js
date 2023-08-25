 
(async function getData() {
    var data =  await fetch ("http://api.themoviedb.org/3/movie/top_rated?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    var  finalResults = await data.json();

    for (let i = 0; i < finalResults.results.length; i++) {
        console.log(finalResults.results[i].title);
       ;

       
    }
    
   

    
})();

var myDiv = document.getElementsByClassName("card");
var newCard =  document.createElement("div");

 var myCard= document.getElementById("myCard");
 newCard.innerHTML=container;

 var container = `<div class="card">
 <div class="poster">
     <img src="assets\Inglourious Basterds (2009) 0.jpg" alt=""> </img>
  </div>
 <div class="details">
     <h2> Movie Name </h2>
     <p> Directed By quantin Tarantino </p>
     <p id="rating">7.5</p>
     <div id="tags"> <span>Action</span> <span>Drama</span> </div>
 </div> </div> `; 

 

 