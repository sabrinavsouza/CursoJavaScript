let isAtivo = false //literal falso
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(('' || null || 0 || 'epa' || 123)) //retorna o primeiro verdadeiro
console.log(!!('' || null || 0 || 'epa' || 123)) //retorna quando tiver verdadeiro

let nome = ""
console.log(nome || 'Desconhecido') //o nome deu falso, então ele retornou o segundo que era true

nome = "Sabrina"
console.log(nome || 'Desconhecido') //retornou o primeiro true