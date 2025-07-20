/* Exemplo de código que atribui nomes e XP a heróis e determina
   seus níveis com base na XP usando um loop for*/

// Definindo nomes e XP para cada herói usando variáveis 
let nome1 = "Seiya";
let xp1 = 950;

let nome2 = "Ikki";
let xp2 = 1800;

let nome3 = "Shun";
let xp3 = 4200;

// Loop for para iterar sobre os heróis e determinar seus níveis com base na XP
for (let i = 1; i <= 3; i++) {
  let nomeAtual = "";
  let xpAtual = 0;
  let nivel = "";

  // Atribui nome e XP com base no índice
  if (i === 1) {
    nomeAtual = nome1;
    xpAtual = xp1;
  } else if (i === 2) {
    nomeAtual = nome2;
    xpAtual = xp2;
  } else if (i === 3) {
    nomeAtual = nome3;
    xpAtual = xp3;
  }

  // Verifica o nível com base na XP
  if (xpAtual < 1000) {
    nivel = "ferro";
  } else if (xpAtual >= 1001 && xpAtual <= 2000) {
    nivel = "bronze";
  } else if (xpAtual >= 2001 && xpAtual <= 5000) {
    nivel = "Prata Ouro";
  } else if (xpAtual >= 5001 && xpAtual <= 8000) {
    nivel = "Platina Diamante";
  } else if (xpAtual >= 8001 && xpAtual <= 9000) {
    nivel = "Ascendente";
  } else if (xpAtual >= 9001 && xpAtual <= 10000) {
    nivel = "Imortal";
  } else if (xpAtual > 10000) {
    nivel = "Radiante";
  }

// Exibe o nome do herói e seu nível
  console.log(`O herói de nome ${nomeAtual} está no nível de ${nivel}`);
}