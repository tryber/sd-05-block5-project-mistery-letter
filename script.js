const posBotaoCriarCarta = document.getElementById('criar-carta');

function imprimeCarta(){
  const conteudoTexto = document.getElementById('carta-texto').value;
  const vetorAuxiliar = conteudoTexto.split(" ");
  console.log(vetorAuxiliar)
  const ultimoParagrafo = document.getElementById('carta-gerada');
  console.log(ultimoParagrafo);

  for (let i = 0; i<vetorAuxiliar.length; i += 1) {
    const criaTagSpan = document.createElement('span');
    criaTagSpan.innerText = vetorAuxiliar[i];
    console.log(criaTagSpan);
    ultimoParagrafo.appendChild(criaTagSpan);
  }

}

posBotaoCriarCarta.addEventListener('click',imprimeCarta);