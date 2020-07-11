const getLetter = document.getElementById('criar-carta');
const letterMade = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];


const ranNum = (n) => Math.floor(Math.random() * n);

function randomClasses() {
  return `${estilo[ranNum(3)]} ${tamanho[ranNum(3)]} ${rotacao[ranNum(2)]} ${inclinacao[ranNum(2)]}}`;
}

function printLetter() {
  const letterText = letterInput.value;
  const stringsArr = letterText.split(' ');
  return stringsArr.forEach((word) => {
    const spanWord = document.createElement('span');
    spanWord.innerHTML = word;
    spanWord.className = randomClasses();
    letterMade.appendChild(spanWord);
  });
}

getLetter.addEventListener('click', printLetter);
