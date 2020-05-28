// create span tags and add it to the p tag once the button is clicked
const button = document.querySelector('button');
const text = document.querySelector('input');
const letter = document.getElementById('carta-gerada');

button.addEventListener('click', function () {
  const words = text.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = words[i];
    letter.appendChild(span);
  }
});
