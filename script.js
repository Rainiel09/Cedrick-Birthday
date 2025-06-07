window.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    const video = document.getElementById("birthdayVideo");

    bgMusic.play().catch(() => {
      document.addEventListener("click", () => {
        bgMusic.muted = false;
        bgMusic.play();
      }, { once: true });
    });

    video.addEventListener("play", () => {
      if (!bgMusic.paused) {
        bgMusic.pause();
      }
    });

    video.addEventListener("pause", () => {
      bgMusic.play();
    });

    video.addEventListener("ended", () => {
      bgMusic.play();
    });
  });

  const noBtn = document.getElementById('noBtn');
const gameSection = document.getElementById('love-game');

noBtn.addEventListener('mouseenter', () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = gameSection.clientWidth - btnWidth;
  const maxY = gameSection.clientHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transform = "translate(0, 0)";
});

function openFullscreen(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeFullscreen() {
  document.getElementById('lightbox').style.display = 'none';
}
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

// Show initial slide
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

// Next/Previous controls
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Auto slideshow
function autoSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

// Initialize slideshow
window.addEventListener("load", () => {
  showSlide(slideIndex);
  setInterval(autoSlide, 3000); // Change every 3 seconds
});