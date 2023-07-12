// Generate slides
const slideshowContainer = document.querySelector('.slideshow-container');
information.forEach((info) => {
  const slide = document.createElement('div');
  slide.classList.add('mySlides', 'fade');
  slide.innerHTML = `
    <a href="${info.link}">
      <img class="slide-img" src="${info.image}">
    </a>
    <div class="caption">${info.title}</div>
  `;
  slideshowContainer.appendChild(slide);
});