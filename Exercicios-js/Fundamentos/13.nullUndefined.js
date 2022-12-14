 let valor // não inicializada
 console.log(valor) // não é legal atribuir uma variavel com undefined, se quiser zerar, usar null

valor = null // ausância de valor = não aponta para nenhum objeto na memória = vazia
console.log(valor)
//console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco) // não esta definido o preco dentro do produto = undefined 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar
console.log(!!produto.preco)
//delete produto.preco = tirar atributo de um objeto
console.log(produto)

produto.preco = null // sem preço. ex: um ebook de graça
console.log(produto)
console.log(!!produto.preco) // valor booleano