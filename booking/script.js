var container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');

var t_name = document.getElementById("t_name");
var t_seats = document.getElementById("t_seats");

let ticketPrice = 200;
//Update total and count
function updateSelectedCount() {
    var selectedSeats = document.querySelectorAll('.row .seat.selected');
    var selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    
}
//Seat click event

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') &&
     !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');

      if (e.target.classList.contains('selected')) {
        // t_seats.innerText += `${e.target.title} , `;
      }
      else {
        // t_seats.innerText -= e.target.title;
      }
  }
  updateSelectedCount();
});

////////////////? Confirm Seats ////////////////////

let  movieSelectedSeats =[] ;
var selctedSC = parseInt(count.innerText);
function confirmSeats() {
    for (var i = 0; i < seats.length; i++){
        if (seats[i].classList.contains('selected')) {
             movieSelectedSeats.push(seats[i].title);
            localStorage.setItem(`${currentMovie}`, JSON.stringify( movieSelectedSeats));
        }
        else {
            // seats.splice(seats[i], 1);
        }
      console.log( movieSelectedSeats);
    }
    console.log("passed");

    t_seats.innerText = movieSelectedSeats;
    setTimeout(function () {
        alert("Have a nice day!");
    }, 500);
}

//////////////////////////// ? Booking ////////////////////////////
var nowPlaying;
var movieList = document.getElementById("movieList");
var currentMovie;
(async function getPlayingNow() {
    var data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce3ad943eaffe233b9fe1d4450ba6c");
    nowPlaying = await data.json();

    for (let i = 0; i < 16; i++) {
        movieList.innerHTML+=
                `<option value=${i}>
            ${nowPlaying.results[i].title}
            </option>
            `;
    }
        
})();

function getSelectedMovie(selectedMovie) {
    currentMovie = selectedMovie;
    t_name.innerText = currentMovie;
    //* CLEAR PREVIOUS MOVIE SEATS //
    for (var i = 0; i < seats.length; i++){
 
            if (seats[i].classList.contains("occupied")) {
                seats[i].classList.remove("occupied");
                console.log("catch a match");
            }
        
    }

    //? read reserved seats //

    var occupied = (JSON.parse(localStorage.getItem(`${currentMovie}`)));
    console.log("occupied " + occupied);
    for (var i = 0; i < seats.length; i++){
        
        for (var j = 0; j < occupied.length; j++) {
            if (seats[i].title === occupied[j]) {
                seats[i].classList.add("occupied");
                console.log("catch a match");
            }
        }
    }
    
    

}