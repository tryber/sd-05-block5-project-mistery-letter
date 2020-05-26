const cardStyles = {
  styles: ['newspaper', 'magazine1', 'magazine2'],
  sizes: ['medium', 'big', 'reallybig'],
  rotations: ['rotateleft', 'rotateright'],
  inclinations: ['skewleft', 'skewright'],
};
const buildStyle = function () {
  const style = cardStyles.styles[parseInt(Math.random() * cardStyles.styles.length)];
  const size = cardStyles.sizes[parseInt(Math.random() * cardStyles.sizes.length)];
  const rot = cardStyles.rotations[parseInt(Math.random() * cardStyles.rotations.length)];
  const skew = cardStyles.inclinations[parseInt(Math.random() * cardStyles.inclinations.length)];
  return `${style} ${size} ${rot} ${skew} carta`;
};
const buildCards = function () {
  const letter = document.getElementById('carta-texto').value.split(' ');
  const messageContainer = document.getElementById('carta-gerada');
  messageContainer.innerHTML = '';
  letter.forEach((word) => {
    const span = document.createElement('span');
    const card = messageContainer.appendChild(span);
    card.className = buildStyle();
    card.innerText = word;
  });
};
window.onload = function () {
  this.document.getElementById('criar-carta').addEventListener('click', buildCards);
};
