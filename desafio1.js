const prompt = require("prompt-sync")();

const lista = [
  {
    id: 0,
    tarefa: "escola",
    marcada: false,
  },
  {
    id: 1,
    tarefa: "academia",
    marcada: false,
  },
  {
    id: 2,
    tarefa: "rolê",
    marcada: false,
  },
];

console.clear();

while (true) {
  console.log(
    `MENU
        1 - ver lista
        2 - adicionar tarefa
        3 - marcar tarefa
        4 - remover tarefa
        5 - encerrar`
  );
  const option = Number(prompt("Digite a opção: "));
  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }
  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  const tarefa = prompt("Qual é o nome da nova tarefa? ");
  lista.push({
    id: lista.length,
    tarefa: tarefa,
    marcada: false,
  });
}

function marcarTarefa() {
  const x = Number(prompt("Qual o id da sua tarefa? "));
  for (let i = 1; i < lista.length; i++) {
    if (x == 0) {
      lista[0].marcada = true;
      break;
    } else if (x == 1) {
      lista[1].marcada = true;
      break;
    } else if (x == 2) {
      lista[2].marcada = true;
      break;
    } else {
      console.clear;
    }
  }
}

function removerTarefa(tarefa) {
  const y = prompt("Qual a tarefa que será removida? ");
  for (let i = 0; i < lista.length; i++) {
    if (y == lista[0]) {
      lista.splice(0, 1);
    } else if (y == lista[1]) {
      lista.splice(1, 1);
    } else if (y == lista[2]) {
      lista.splice(2, 1);
    }
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}
