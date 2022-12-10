//código mais elegante

const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!";


const tamplate = `
    Olá
    ${nome}!` //considera as quebras de linhas

console.log(concatenacao, tamplate)

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`) //precisa estar após o $ e dentro de chaves para a função funcionar

console.log(typeof up)