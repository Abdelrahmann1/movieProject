

var inputElement = $("#movie-name")[0]

var movieWrapper = $("#movie-wrapper")

console.log(movieWrapper)




async function getSearch() {


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWI2ZGZlOTI5ZmVjM2M0YWMzYmQ4MzI2YTAzMzQyZSIsInN1YiI6IjY0NzMzYzIzZGQ3MzFiMmQ3OWQxODM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMM2Sh6hL8bC2f8Kv1pc7gZZ4BoHF4q8fRDnM3lTFdE'
        }
      };
      
      var mydata ;
    var data = await fetch('https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1', options)
        .then(response =>  response.json() )
        .then(response => console.log(response)).then(
            response => {
                mydata = response;
                console.log(mydata);
            }
        )
        .catch(err => console.error(err));
            
        console.log(await data.json())
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