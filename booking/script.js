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


// A $( document ).ready() block.


var xhttp = new XMLHttpRequest();
var usersList = document.getElementById("usersList");

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var dataAfterConverted= JSON.parse(this.responseText)
            console.log(dataAfterConverted['data']);
            
            // fname.value = dataAfterConverted['data'].at(uId).first_name;

            for (var i = 0; i < dataAfterConverted['data'].length; i++) {
                usersList.innerHTML+=
                `<option value=${i}>
            ${dataAfterConverted['data'].at(i).first_name}
            </option>
            `;
            }
            // usersList.addEventListener("change", function () {
                    
            // });
        }
    }
    xhttp.open("GET","https://reqres.in/api/users/",true);
    xhttp.send();

function getSelectedUser(selectedUser) {

    console.log(selectedUser);
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var dataAfterConverted= JSON.parse(this.responseText)
            uAvatar.src = dataAfterConverted['data'].at(selectedUser).avatar;
            fname.value = dataAfterConverted['data'].at(selectedUser).first_name;
            lname.value = dataAfterConverted['data'].at(selectedUser).last_name;
        }
    }
    xhttp.open("GET","https://reqres.in/api/users/",true);
    xhttp.send();
    }