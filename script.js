// Agrupamento das classes de acordo com o tipo
const classesEstilos = ['newspaper', 'magazine1', 'magazine2'];
const classesTamaho = ['medium', 'big', 'reallybig'];
const classesRotacao = ['rotateleft', 'rotateright'];
const classesInclinacao = ['skewleft', 'skewright'];
let qtdePalavras = '';

function criarElementosCarta() {
  // divide a palavra em um array usando o espaço como separador
  const stringPalavras = document.getElementById('carta-texto').value;
  const arrayPalavras = stringPalavras.split(' ');
  qtdePalavras = arrayPalavras.length;
  document.getElementById('carta-gerada').innerHTML = '';
  // cria um span para cada palavra
  for (let i = 0; i < qtdePalavras; i += 1) {
    const span = document.createElement('span');
    document.getElementById('carta-gerada').appendChild(span);
  }
  // insere cada palavra em um dos span criados
  for (let j = 0; j < qtdePalavras; j += 1) {
    document.querySelectorAll('#carta-gerada span')[j].innerText = arrayPalavras[j];
  }
}

const botaoGerar = document.getElementById('criar-carta');
function criarCarta() {
  criarElementosCarta();
}
botaoGerar.addEventListener('click', criarCarta);

