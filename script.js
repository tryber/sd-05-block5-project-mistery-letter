// classes groups
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

// create span tags and add it to the p tag once the button is clicked
const button = document.getElementById('criar-carta');
const text = document.querySelector('input');
const letter = document.getElementById('carta-gerada');

button.addEventListener('click', function () {
  const words = text.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = words[i];
    randomClasses(span);
    letter.appendChild(span);
  }
  // add the letter number of words to the paragraph carta-contador
  document.getElementById('carta-contador').innerHTML += words.length;
});

// add possibility of changing the style of a letter
let counter = 0;
letter.addEventListener('click', function (event) {
  counter += 1;
  if (counter > 3) {
    alert('Você atingiu o número máximo de 3 mudanças. Por favor, recarregue a página.');
  } else {
    const word = event.target;
    word.className = '';
    randomClasses(word);
  }
});

// function that applies random classes
function randomClasses (element) {
  element.classList.add(styleGroup[Math.floor(Math.random() * 3)]);
  element.classList.add(sizeGroup[Math.floor(Math.random() * 3)]);
  element.classList.add(rotationGroup[Math.floor(Math.random() *2)]);
  element.classList.add(inclinationGroup[Math.floor(Math.random()* 2)]);
}
