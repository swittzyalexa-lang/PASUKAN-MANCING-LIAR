let music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
}