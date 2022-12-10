var a = 3;
let b = 4;

var a = 30; //var pode declarar de novo
b = 40; // quando usado let não pode declarar a mesma de novo, ocorre erro

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5; //quanto mais constante seu programa, melhor. Se tu sabe que não vai mudar, preferia CONST.
//c = 50;
console.log(c)