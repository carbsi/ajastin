console.log('Hello, World!');

// Hae nykyinen päivämäärä ja aika
const currentDate = new Date();
console.log(currentDate); // Tulostaa nykyisen päivämäärän ja ajan konsoliin

// Aseta kohdepäivämäärä ja -aika
const targetDate = new Date('2025-01-17T23:59:59');// Korvaa kohdepäivämäärällä
console.log(targetDate); // Tarkista kohdepäivämäärä konsolista

// Laske millisekunneissa ero nykyisen ja kohdepäivämäärän välillä
const difference = targetDate - currentDate;
console.log(difference); // Tämä tulostaa eron millisekunneissa

// Aseta ajastin päivittämään laskuri joka sekunti
function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "Tapahtuma on jo alkanut!";
      }
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  const interval = setInterval(updateCountdown, 1000);