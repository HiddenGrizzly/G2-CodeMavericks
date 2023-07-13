const showMapButton = document.querySelector('#show-map');
const map = document.querySelector('#my-map');

showMapButton.addEventListener('click', () => {
  if (map.style.display === 'none') {
    map.style.display = 'block';
  } else {
    map.style.display = 'none';
  }
});
