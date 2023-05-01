const button = document.querySelector('.flip-button');
const card = document.querySelector('.card');

button.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});