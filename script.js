const grupoEstilo = [ 'newspaper', 'magazine1', 'magazine2' ];
const grupoTamanho = [ 'medium', 'big', 'reallybig'];
const grupoRotacao = [ 'rotateleft', 'rotateright'];
const grupoInclinacao = [ 'skewleft', 'skewright'];

const posBotaoCriarCarta = document.getElementById('criar-carta');

function imprimeCarta() {
  const conteudoTexto = document.getElementById('carta-texto').value;
  const vetorAuxiliar = conteudoTexto.split(' ');
  const ultimoParagrafo = document.getElementById('carta-gerada');
  ultimoParagrafo.innerHTML = '';

  for (let i = 0; i < vetorAuxiliar.length; i += 1) {
    const criaTagSpan = document.createElement('span');
    const randomEstilo = Math.floor(Math.random() * 3);
    const randomTamanho = Math.floor(Math.random() * 3);
    const randomRotacao = Math.floor(Math.random() * 2);
    const randomInclinacao = Math.floor(Math.random() * 2);
    criaTagSpan.className += grupoEstilo[randomEstilo];
    criaTagSpan.className += ' ';
    criaTagSpan.className += grupoTamanho[randomTamanho];
    criaTagSpan.className += ' ';
    criaTagSpan.className += grupoRotacao[randomRotacao];
    criaTagSpan.className += ' ';
    criaTagSpan.className += grupoInclinacao[randomInclinacao];
    criaTagSpan.innerText = vetorAuxiliar[i];
    ultimoParagrafo.appendChild(criaTagSpan);
  }
}

posBotaoCriarCarta.addEventListener('click',imprimeCarta);
