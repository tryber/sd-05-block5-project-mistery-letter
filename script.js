//SECTION

// 1 - Deve haver um input com o id="carta-texto"
// onde o usuário poderá digitar o conteúdo da carta.
const inputCartaTexto = document.getElementById('carta-texto');

// 2 - Deve haver um parágrafo com o id="carta-gerada" onde
// o usuário verá o resultado de sua carta misteriosa.
const outputCartaGerada = document.getElementById('carta-gerada');
// 3 - Deve haver um botão com id="criar-carta" e ao clicar
// nesse botão, a carta misteriosa deve ser gerada.
// Pontos importantes:
const buttonCriarCarta = document.getElementById('criar-carta');

// * Cada palavra deve aparecer dentro de uma tag `span`.
// * As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`.

//SECTION Gerar carta 

function gerarCarta() {
    const inputCartaTextoValue = inputCartaTexto.value;
    const splitInputCartaTextoValue = inputCartaTextoValue.split(' ')
    console.log(splitInputCartaTextoValue)
    for (let index = 0; index < splitInputCartaTextoValue.length; index++) {
      const element = splitInputCartaTextoValue[index];
      let span = document.createElement('span');
      span.innerHTML = `${element}`; 
      let classLibrary = {
        1: 'newspaper',
        2: 'magazine1',
        3: 'magazine2',
        4: 'medium',
        6: 'big',
        7: 'reallybig',
        8: 'rotateleft',
        9: 'rotateright',
        10: 'skewleft',
        11: 'skewright',
      }
      let randomClass = classLibrary[(Math.ceil(Math.random()*11))]
      span.className = randomClass;
      outputCartaGerada.appendChild(span);           
    }    
}

buttonCriarCarta.addEventListener('click', gerarCarta);
//same function, on ENTER keyup
inputCartaTexto.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    gerarCarta();
  }
});


