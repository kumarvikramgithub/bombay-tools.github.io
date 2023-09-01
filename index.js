let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function openMenuSlider(){
  console.log('Open');
  let main = document.getElementById("contents");
  let menu = document.getElementById("menuSlideFromTop");
  menu.style.display="block";
  main.style.display = "none";
}
function closeMenuSlider(){
  console.log('Close');
  let main = document.getElementById("contents");
  let menu = document.getElementById("menuSlideFromTop");
  main.style.display = 'block';
  menu.style.display="none";
  
  
}