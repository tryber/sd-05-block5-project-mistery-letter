// classes groups
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

// create span tags and add it to the p tag once the button is clicked
const button = document.querySelector('button');
const text = document.querySelector('input');
const letter = document.getElementById('carta-gerada');

button.addEventListener('click', function () {
  const words = text.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = words[i];
    span.classList.add(styleGroup[Math.floor(Math.random() * 3)]);
    span.classList.add(sizeGroup[Math.floor(Math.random() * 3)]);
    span.classList.add(rotationGroup[Math.floor(Math.random() * 2)]);
    span.classList.add(inclinationGroup[Math.floor(Math.random() * 2)]);
    letter.appendChild(span);
  }
});
