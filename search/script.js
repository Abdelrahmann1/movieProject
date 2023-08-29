$(document).ready(function(){
    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});

var searchResults;
async function search(query) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmE1OWE4YzhiOGE4ZTNkNjRmYWY1NjRjOTczZjljZiIsInN1YiI6IjY0ZWI2YWY3MWZlYWMxMDBmZTVkYWQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTaiGVwte0qGf8oXppNeE1G5VsgV9qqndeYtoUlGGaY'
        }
      };
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    searchResults = response;
    console.log(searchResults);
    


};

var form = document.getElementById("form");
form.addEventListener("submit", (e) => {

var inputSearch = document.getElementById("search");
    e.preventDefault();
    const query = inputSearch.value;
    if (query) {
        search(query);
        console.log(searchResults);
    }
    for (let i = 0; i < 20; i++) {
        var card = `<div class="card" ">
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500${searchResults.results[1].poster_path}">
           
        </div>
        <div class="details">
         <i class="fa-regular fa-heart" id="favorite" ></i> 
            <h2> ${searchResults.results[1].title}  </h2>
            <p>${searchResults.results[1].release_date}  </p>
            <p id="rating">${searchResults.results[1].vote_average}</p>
            <div id="tags"> <span>Action</span> <span>Drama</span> </div>
        </div>
        
        </div>` ;
            $("#cardContainer").append(card);
            
            
        }
  });