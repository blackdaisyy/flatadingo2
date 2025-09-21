const title = document.getElementById("title");
const poster = document.getElementById("poster");
const runtime = document.getElementById("runtime");
const showtime = document.getElementById("showtime");
const availableTickets = document.getElementById("available-tickets");
const buyButton = document.getElementById("buy-ticket");
const filmsList = document.getElementById("films");

fetch("http://localhost:3000/films")
  .then((res) => res.json())
  .then((movies) => {
    displayMovie(movies[0]); // Show the first movie by default
  });

  function displayMovie(movie) {
    title.textContent = movie.title;
    poster.src = movie.poster;
    runtime.textContent = movie.runtime;
    showtime.textContent = movie.showtime;
    availableTickets.textContent = movie.capacity - movie.tickets_sold;

    // Handle buy ticket button
    buyButton.onclick = () => {
      let remaining = parseInt(availableTickets.textContent);
      if (remaining > 0) {
        remaining--;
        availableTickets.textContent = remaining;
      } else {
        alert("Sold Out!");
      }
    };
  }