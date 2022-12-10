console.log(7/0.000000000001);
console.log(7/0);

console.log("3" + 5) //não vai somar, vai dar preferência para concatenar a string.
console.log("3" - 5) //funciona pq não faz sentido no mundo da string

console.log("10" / 2); //coisas estranhas em js
console.log("10.5" / 2); //coisas estranhas em js
console.log("10,5" / 2); //não aceita a virgula, somente o ponto

console.log("Show!" * 2); //algumas linguagens aceitam isso, mas js não
console.log(0.1 + 0.7); //algumas imprecisões com ponto flutuante, se fosse muito preciso ficaria mais lento, então a maioria faz isso (IEEE).. então, tomar cuidado

//console.log(10.toString()); erro
console.log((10).toFixed(2));
console.log((8.4746582).toFixed(3));

