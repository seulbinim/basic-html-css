const button = document.querySelector('.voting-result-button');
const results = document.querySelectorAll('.voting-result');

button.addEventListener("click", () => {
  results.forEach(result => {
    result.removeAttribute('hidden');
  });
});