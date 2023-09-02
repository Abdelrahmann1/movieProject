var container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');

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
  }
  updateSelectedCount();
});


////////////////? Confirm Seats ////////////////////

var selectedSeats =[];
var selctedSC = parseInt(count.innerText);
function confirmSeats() {
    for (var i = 0; i <= seats.length; i++){
        if (seats[i].classList.contains('selected')) {
         selectedSeats.push(seats[i].title);
        }
        else {
            // seats.splice(seats[i], 1);
        }
      console.log(selectedSeats);
    }
    // console.log(selectedSeats);
  alert(`You have reserved  ${seats} seats`);
}

// ? Booking //
const movieName =  new URLSearchParams(window.location.search).get('movieNameString');
(function () {
    document.getElementById('movieName').innerHTML += movieName ;
})();