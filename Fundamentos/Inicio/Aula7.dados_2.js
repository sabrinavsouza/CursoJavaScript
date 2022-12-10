// var + identificador (nome da variavel/precisa ser bons nomes para ficar entendivel);
// var + identitificador (idade) + simbolo de atribuição (=) 3;
// var idadeSabrina = 23;

let preco = 19.90;
let desconto = 0.4; //40%
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto); //valor com variavel, melhor legivel


console.log(19.9 * 0.6); //valor literal, precisa repetir o valor sempre


let nome = "Caderno"; // variavel do tipo String (Texto) -> sequência de símbolos
let categoria = "Papelaria";
console.log("Produto: " + nome 
    + ". Categoria: " + categoria
    + ". Preço " + preco
    + ". Desconto: " + desconto); // '+' faz a concatenação (junta) de um texto a outro.

console.log(1 + 1); // somou os números
console.log("1" + "1"); // juntou o texto/String que está entre aspas