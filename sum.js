//FUNÇÃO SOMA DE DOIS NÚMEROS

function soma(numero1,numero2){
    return numero1 + numero2;
}

console.log(soma(150,20));

//FUNÇÃO MAIOR DE IDADE
function isAdult (age) {
  return age >= 18;
}
const age = 9;
if (isAdult(age)) {
  console.log(`É adulto pois já tem ${age} anos.`);
} else {
  console.log(`Não é adulto ainda, tem ${age} anos.`);
}    