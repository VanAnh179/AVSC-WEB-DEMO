// Responsive menu
function navbar() {
  var a = document.getElementById("myTopnav");
  if (a.className === "topnav") {
    a.className += " responsive";
  } else {
    a.className = "topnav";
  }
}

// Hashtags


// Video
const video_button = document.getElementById('video_button');
const video_file = document.getElementById('video_file');
const closeBtn = document.getElementById('closeBtn');
const videoContainer = document.getElementById('videoContainer')
video_button.addEventListener('click', (e)=> {
  e.preventDefault();
  video_file.classList.add('video_play');
  videoContainer.style.background = '#0000007e';
  videoContainer.style.display = 'block';
  closeBtn.style.display = 'block';
})
closeBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  video_file.classList.remove('video_play');
  videoContainer.style.background = '';
  videoContainer.style.display = 'none';
  closeBtn.style.display = 'none';
  video_file.pause();
})

// Slideshow
var slideIndex = 1;
  showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
 }
function currentSlide(n) {
  showSlides(slideIndex = n);
 }
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}