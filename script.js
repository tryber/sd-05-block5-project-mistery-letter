const getLetter = document.getElementById('criar-carta');
const letterMade = document.getElementById('carta-gerada');
const letterInput = document.getElementById('carta-texto');

function printLetter() {
  const letterText = letterInput.value;
  const stringsArr = letterText.split(' ');
  return stringsArr.forEach((word) => {
    const spanWord = document.createElement('span');
    spanWord.innerHTML = word;
    letterMade.appendChild(spanWord);
  });
}

getLetter.addEventListener('click', printLetter);
