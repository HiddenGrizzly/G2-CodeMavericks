const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
let slideIndex =1;showSlides(slideIndex);

// Next/previous controls
function plusSlides(n){showSlides(slideIndex += n);}

// Thumbnail image controls
function currentSlide(n){showSlides(slideIndex = n);}

function showSlides(n){
let i;let slides = document.getElementsByClassName("mySlides");let dots = document.getElementsByClassName("dot");
if (n > slides.length){slideIndex =1}
if (n<1){slideIndex = slides.length}
for (i=0;i<slides.length;i++){slides[i].style.display ="none";}
for (i=0;i<dots.length;i++){dots[i].className = dots[i].className.replace(" active", "");}
slides[slideIndex-1].style.display ="block";dots[slideIndex-1].className +=" active";
}
