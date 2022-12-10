const escola = "Cod3r"

console.log(escola.charAt(3)); //inicia a contagem no zero, chama o indice
console.log(escola.charAt(5)); //como não existe, ele não imprime e retorna um vazio(nukll), não chama o erro como em Java por exemplo
console.log(escola.charCodeAt(3)); //código na tabela UNICODE
console.log(escola.indexOf('3')); //indice associado ao digito 3 dentro da palavra escola

console.log(escola.substring(1)) //imprimiu todos apartir de 1
console.log(escola.substring(0,3)) // imprimiou do 0 ao 2, não inclui o ultimo

console.log('Escola '.concat(escola).concat("!")); //concatena strings
console.log('Escola ' + escola + "!"); //+ em string concateca também

console.log(escola.replace(3, 'e')) //substitui um pelo outro
console.log(escola.replace(/\w/g, 'e')) //susbtitui todos

console.log('Ana,Maria,Pedro'.split(",")) //quebra a string em uma array
console.log('Ana Maria Pedro'.split(/ /))