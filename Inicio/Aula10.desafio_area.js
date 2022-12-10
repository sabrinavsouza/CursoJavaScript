//Calcular area de uma circunferência -> PI * raio * raio
//Mostrar no console "O resultado é: " em m2
// PI = 3.141592 - quando constante se usa letras maiusculas.

const raio = 10;
const PI = 3.141592; 
let calculoAreaCircunferencia = PI * raio * raio;
console.log("O resultado da área da circunferência é de: " + calculoAreaCircunferencia + " m².");

calculoAreaCircunferencia = Math.PI * raio * raio; //também pode ser feito com a class math (número "completo" não é aproxido)
console.log("O resultado da área da circunferência é de: " + calculoAreaCircunferencia + " m².");
