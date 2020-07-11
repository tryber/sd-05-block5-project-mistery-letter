const getLetter = document.getElementById('criar-carta');
const letterMade = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');
const counter = document.getElementById('carta-contador');

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];


const ranNum = (n) => Math.floor(Math.random() * n);

function randomClasses() {
  const ramStyle = estilo[ranNum(estilo.length)];
  const ramSize = tamanho[ranNum(tamanho.length)];
  const ramRotate = rotacao[ranNum(rotacao.length)];
  const ramAngle = inclinacao[ranNum(inclinacao.length)];
  return `${ramStyle} ${ramSize} ${ramRotate} ${ramAngle}`;
}

function removeSpan() {
  const oldText = document.getElementsByTagName('span');
  Array.from(oldText).forEach((span) => letterMade.removeChild(span));
}

function changeStyle(event) {
  const wordTarget = event.target;
  wordTarget.className = randomClasses();
}

function printLetter() {
  removeSpan();
  const letterText = letterInput.value;
  const stringsArr = letterText.split(' ');
  counter.innerHTML = stringsArr.length;
  return stringsArr.forEach((word) => {
    const spanWord = document.createElement('span');
    spanWord.innerHTML = word;
    spanWord.className = randomClasses();
    spanWord.addEventListener('click', changeStyle);
    letterMade.appendChild(spanWord);
  });
}

getLetter.addEventListener('click', printLetter);
