const grupoEstilo = ["newspaper", "magazine1", "magazine2"];
const grupoTamanho = ["medium", "big", "reallybig"];
const grupoRotação = ["rotateleft", "rotateright"];
const GrupoInclinação = ["skewleft", "skewright"];
const grupos = [grupoEstilo, grupoTamanho, grupoRotação, GrupoInclinação];
function rnd(size) {
  let num = Math.floor(Math.random() * (size - 1) + 0.8);
  return num > size ? size : num;
}

function sorteio() {
  let classe = "";
  for (let i = 0; i < grupos.length; i++) {
    let teste = rnd(grupos[i].length);
    classe += grupos[i][teste] + " ";
  }
  return classe;
}

function vamos() {
  let texto = document.getElementById("carta-texto").value;

  console.log(texto);
  texto = texto.split(" ");

  console.log(texto);
  for (let palavras = 0; palavras < texto.length; palavras++) {
    const classes = sorteio();
    console.log(classes);
    const elemento = document.createElement("span");
    elemento.className = classes;
    elemento.innerHTML = texto[palavras];
    document.getElementById("carta-gerada").appendChild(elemento);
  }
  document.getElementById("carta-contador").innerText = texto.length; //document.getElementById("carta-gerada").children.length;
  return "ok";
}
const botao = document.getElementById("criar-carta");
botao.addEventListener("click", vamos);

const cartaGerada = document.getElementById("carta-gerada");
cartaGerada.addEventListener("click", function (evento) {
  evento.target.className = "";
  const classes = sorteio();
  evento.target.className = classes;
});
