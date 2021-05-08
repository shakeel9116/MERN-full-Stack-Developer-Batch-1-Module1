// Get DOM Element
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;

function  updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}


// save the movie data to local storage
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat,index) =>{ 
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })

    };
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;

    }
}

// Event Listners
// 1. Event Listner for container to check for click on seats
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

// 2. Event listner for movie select
movieSelect.addEventListener('change',e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
})

// initial count and total price
updateSelectedCount();