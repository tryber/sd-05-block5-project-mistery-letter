// variaveis
const inputTexto = document.getElementById('carta-texto');
const botaoTexto = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
let contador = document.getElementById('carta-contador');
// functions

function geraCarta() {
  carta.innerHTML = ''; // limpa a carta
  const array = inputTexto.value.split(' '); // divide a string do input em um array de palavras
  contador.innerText = array.length; // conta a quantidade de palavras no array 
  for (let index = 0; index < array.length; index += 1) { // executa o for em cada palavra do array
    const span = document.createElement('span'); // cria um span
    carta.appendChild(span); // adiciona o span no paragrafo da carta
    span.innerText = `${array[index]} `; // define o innertext do span com a palavra do array
  }
}

// listeners

botaoTexto.addEventListener('click', geraCarta); // listener que gera a carta
