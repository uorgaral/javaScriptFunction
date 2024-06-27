const prompt = require("prompt-sync")();
const num = Number(prompt("Digite o número para a operação: "));
const numDois = Number(prompt("Digite outro número para a operação: "));

function operador() {
  console.log(
    `Qual operação vai ser feita?
    1 - Soma
    2 - Multiplicação
    3 - Divisão
    4 - Subtração
    5 - Encerrar
`
  );
}
operador();

const operacao = Number(prompt("Digite a operação que será feita: "));
if (operacao === 5) {
  console.clear();
  console.log("Cálculo encerrado!");
}

function opSoma() {
  console.log(num + numDois);
}

function opMulti() {
  console.log(num * numDois);
}

function opDivi() {
  console.log(num / numDois);
}

function opSub() {
  console.log(num - numDois);
}

switch (operacao) {
  case 1:
    opSoma();
    break;
  case 2:
    opMulti();
    break;
  case 3:
    opDivi();
    break;
  case 4:
    opSub();
    break;
  default:
    console.log("Operação inválida");
}
