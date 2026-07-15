const startDate = new Date("December 16, 2023 00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `❤️ Together for ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();
