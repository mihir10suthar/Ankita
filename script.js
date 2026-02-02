// Music toggle
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

// Secret message
function revealMessage() {
  document.getElementById("secretMessage").style.display = "block";
}

// Falling flowers
const flowers = ["🌻", "🌸", "🌼", "🌷"];

for (let i = 0; i < 20; i++) {
  let flower = document.createElement("span");
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".flowers-container").appendChild(flower);
}
