let a = 7;
let b = 94;
console.log("Valores originais: ");
console.log("A: " + a);
console.log("B: " + b);

let troca = a;
a = b;
b = troca;

console.log("Valores trocados: ");
console.log("A: " + a);
console.log("B: " + b);

/*
Como eu havia feito:
let trocaA = a + 87;
let trocaB = b - 87;

a = trocaA;
b = trocaB;

console.log(a);
console.log(b);
*/

/* opção direta no JavaScript para troca de valores: 
   [a,b] = [b,a];
*/

