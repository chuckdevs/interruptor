const btnLigar = document.querySelector("#interruptor");
const fundo = document.querySelector("body");
const indicator = document.querySelector(".indicator");

function interruptor() {
  let off = fundo.style.backgroundColor === "black";

  if (off) {
    fundo.style.backgroundColor = "white";
    indicator.innerText = "LIGADO";
    indicator.style.color = "black";
  } else {
    fundo.style.backgroundColor = "black";
    indicator.innerText = "DESLIGADO";
    indicator.style.color = "white";
  }
}

btnLigar.addEventListener("click", interruptor);
