

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
      mySearch.innerHTML= " ";
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

    //           mySearch.innerHTML = `<div class="card" onclick = "getTheMovie(this)">
    //   <div class="poster">
    //   <img src="https://image.tmdb.org/t/p/w500${mydata.results[i].poster_path}">
      
    //   </div>
    //   <div class="details">
    //   <i class="fa-solid" :"fa-regular"} fa-heart favorite"
    //   id="favorite" 
      
    //   onclick= "toggleFav(${mydata.results[i].id},this)" ></i> 
      
      
    //   <h2> ${mydata.results[i].title}  </h2>
    //   <p>${mydata.results[i].release_date}  </p>
    //   <p id="rating">${Number( mydata.results[2].vote_average).toFixed(1)}</p>
      
    //   <div id="tags"> <span id="firstgener">20</span> 
    //    </div>
      
    //   </div>
      
    //   </div>`;

        }
    

        // .then(response =>  response.json() )
        // .then(response => console.log(response)).then(
        //     response => {
        //       console.log("Hi");
        //     }
        // )
        // .catch(err => console.error(err));  
        
        // console.log( data.json())
            // var x = await data.json();
            // console.log(x);
        // for (let i = 0; i < response.results.length; i++) {
        //     const element = array[i];
            
        // }
    
}




// $("#search-btn").click( function(){
//     movieWrapper.html(" ")
//     $("#error").text("")
//     $("#loader").text("loading........")
// $.get(`https://api.themoviedb.org/3/search/movie?query=${inputElement.value}&include_adult=false&language=en-US&page=1` , function(response){
//     console.log(response);
//     console.log(response.results[0].title);




        
//     $("#loader").text(" ")
//     var movies = response.Search ;
//     console.log(movies.results[1].title);
//     for( var i = 0 ; i < 18 ; i++ ){
//         console.log(response.results[i].title)
//         var movieCard = $("<div>")
//         movieCard.addClass("movie-card")
//         var movieImage = $("<img>")
//         movieImage.attr("src" ,  ` https://image.tmdb.org/t/p/w500${response.results[i].poster_path} `)
//         movieImage.addClass("movie-image")
//         var titleElement = $("<p>")
//         titleElement.text(response.results[i].title)
//         var type = $("<p>")
//         type.text(movies[i].Type)
//         var releaseYear = $("<p>")
//         releaseYear.text(response.results[i].release_date)
//         movieCard.append(movieImage,titleElement,type,releaseYear)
//         movieWrapper.append(movieCard)

//      }
// }   )
// } )
function test() {
   
  var x = localStorage.getItem("movieSearch");
    alert(x);
}