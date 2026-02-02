// MUSIC TOGGLE
const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}

// SECRET MESSAGE
function revealMessage() {
  document.getElementById("secretMessage").style.display = "block";
}

// FALLING FLOWERS
const flowers = ["🌻", "🌸", "🌼", "🌷"];
const container = document.querySelector(".flowers-container");

for (let i = 0; i < 25; i++) {
  const flower = document.createElement("span");
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  container.appendChild(flower);
}
