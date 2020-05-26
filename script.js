/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
Array.prototype.getRandom = function () {
  return this[Math.floor(Math.random() * this.length)];
};
const cardStyles = {
  styles: ['newspaper', 'magazine1', 'magazine2'],
  sizes: ['medium', 'big', 'reallybig'],
  rotations: ['rotateleft', 'rotateright'],
  inclinations: ['skewleft', 'skewright'],
};
const buildStyle = function () {
  const style = cardStyles.styles.getRandom();
  const size = cardStyles.sizes.getRandom();
  const rot = cardStyles.rotations.getRandom();
  const skew = cardStyles.inclinations.getRandom();
  return `${style} ${size} ${rot} ${skew}`;
};
const changeStyle = function (element) {
  element.target.className = buildStyle();
};
const buildCards = function () {
  const letter = document.getElementById('carta-texto').value.split(' ');
  const messageContainer = document.getElementById('carta-gerada');
  document.getElementById('carta-contador').innerText = letter.length;
  messageContainer.innerHTML = '';
  letter.forEach((word) => {
    const span = document.createElement('span');
    const card = messageContainer.appendChild(span);
    card.className = buildStyle();
    card.innerText = word;
    card.addEventListener('click', changeStyle);
  });
};
window.onload = function () {
  this.document.getElementById('criar-carta').addEventListener('click', buildCards);
};
