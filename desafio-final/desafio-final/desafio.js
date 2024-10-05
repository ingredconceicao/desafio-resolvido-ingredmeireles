/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

let medalhas = {};
let input;

while (true) {
  input = prompt("Informe o país e o número de medalhas de ouro, prata e bronze separados por vírgula ou digite 'sair' para encerrar:");

  if (input.toLowerCase() === "sair") {
    break;
  }

  let [pais, ouro, prata, bronze] = input.split(",");
  ouro = parseInt(ouro);
  prata = parseInt(prata);
  bronze = parseInt(bronze);

  if (!pais || isNaN(ouro) || isNaN(prata) || isNaN(bronze)) {
    console.log("Entrada inválida");
    continue;
  }

  let totalMedalhas = ouro + prata + bronze;

  if (medalhas[pais]) {
    medalhas[pais] += totalMedalhas;
  } else {
    medalhas[pais] = totalMedalhas;
  }
}

console.log("Ranking de medalhas:");
for (let pais in medalhas) {
  console.log(`#${pais}: ${medalhas[pais]} medalhas`);
}
