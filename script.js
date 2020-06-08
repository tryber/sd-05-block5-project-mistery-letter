let cartaTextoInput = document.getElementById("carta-texto");
let cartaTextoButton = document.getElementById("criar-carta");
let pWords = document.getElementById("carta-gerada");
let pCounter = document.getElementById("carta-contador");
let estilo = ["newspaper", "magazine1", "magazine2"];
let tamanho = ["medium", "big", "reallybig"];
let rotacao = ["rotateleft", "rotateright"];
let inclinacao = ["skewleft", "skewright"];

function setRandom(number) {
  let random = Math.floor(Math.random() * (number - 1 ) + 0.5);
  return random;
}

function setStyle() {
  let grupoEstilo = estilo[setRandom(3)];
  let grupoTamanho = tamanho[setRandom(3)];
  let grupoRotacao = rotacao[setRandom(2)];
  let grupoInclinacao = inclinacao[setRandom(2)];
  let classeDefinida = grupoEstilo+" "+grupoTamanho+" "+grupoRotacao+" "+grupoInclinacao;
  return classeDefinida;
}

function setSpan(string) {
  let newSpan = document.createElement("span");
  newSpan.className = setStyle();
  newSpan.innerHTML = string;

  pWords.appendChild(newSpan);
}

function createLetter() {
  let word = cartaTextoInput.value.split(' ');
  pCounter.innerText = word.length;
  for (let index = 0; index < word.length; index += 1) {
    setSpan(word[index]);
  }
}



cartaTextoButton.addEventListener("click", createLetter);
