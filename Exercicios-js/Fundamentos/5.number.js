const peso1 = 1;
const peso2 = 1.1;
const peso3 = Number('2.0'); //outra forma de declarar

console.log(peso1 + " | " + peso2 + " | " + peso3);
console.log(Number.isInteger(peso1)); //true pois é inteiro
console.log(Number.isInteger(peso2)); //false pois não é inteiro
console.log(Number.isInteger(peso3)); //true pois considera como inteiro ".0"

const avaliacao1 = 9.871;
const avaliacao2 = 6.478;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total/(peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); //mostra duas casas decimais
console.log(media.toString(2)); //função transformou em binário
console.log(typeof media);
console.log(typeof Number); //função quando é com N maiusculo
