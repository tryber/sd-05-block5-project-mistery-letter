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

function atribuirClasseEstilo() {
  // Sorteia uma clasee para cada palavra
  for (let i = 0; i < qtdePalavras; i += 1) {
    // Sorteio Estilos
    const numEstilo = Math.floor(Math.random() * 3);
    const estilo = classesEstilos[numEstilo];
    const spanPalavra = document.querySelectorAll('#carta-gerada span');
    spanPalavra[i].classList.add(estilo);
  }
}
function atribuirClasseTamanho() {
  // Sorteia uma classe para cada palavra
  for (let i = 0; i < qtdePalavras; i += 1) {
    // Sorteio Tamanho
    const numTamanho = Math.floor(Math.random() * 3);
    const tamanho = classesTamaho[numTamanho];
    const spanPalavra = document.querySelectorAll('#carta-gerada span');
    spanPalavra[i].classList.add(tamanho);
  }
}
function atribuirClasseRotacao() {
  // Sorteia uma classe para cada palavra
  for (let i = 0; i < qtdePalavras; i += 1) {
    // Sorteio Rotacao
    const numRotacao = Math.floor(Math.random() * 2);
    const rotacao = classesRotacao[numRotacao];
    const spanPalavra = document.querySelectorAll('#carta-gerada span');
    spanPalavra[i].classList.add(rotacao);
  }
}
function atribuirClasseInclinacao() {
  // Sorteia uma clasee para cada palavra
  for (let i = 0; i < qtdePalavras; i += 1) {
    // Sorteio Inclinação
    const numInclinacao = Math.floor(Math.random() * 2);
    const inclinacao = classesInclinacao[numInclinacao];
    const spanPalavra = document.querySelectorAll('#carta-gerada span');
    spanPalavra[i].classList.add(inclinacao);
  }
}

const botaoGerar = document.getElementById('criar-carta');
function criarCarta() {
  criarElementosCarta();
  atribuirClasseEstilo();
  atribuirClasseTamanho();
  atribuirClasseRotacao();
  atribuirClasseInclinacao();
  document.getElementById('carta-contador').innerText = qtdePalavras;
}
botaoGerar.addEventListener('click', criarCarta);

const carta = document.getElementById('carta-gerada');
function mudarClasses(e) {
  const spanPalavra = e.target;
  spanPalavra.className = '';
  atribuirClasseEstilo();
  atribuirClasseTamanho();
  atribuirClasseRotacao();
  atribuirClasseInclinacao();
}
carta.addEventListener('click', mudarClasses);
