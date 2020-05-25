//variaveis
const inputTexto = document.getElementById('carta-texto');
const botaoTexto = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');

// functions

function geraCarta() {
  const array = inputTexto.value.split(' ');
  console.log(array)
  for (index = 0; index < array.length; index += 1) {
    const span = document.createElement('span');
    carta.appendChild(span);
    span.innerText = array[index] + ' ';
  }
}

//listeners

botaoTexto.addEventListener('click', geraCarta);
