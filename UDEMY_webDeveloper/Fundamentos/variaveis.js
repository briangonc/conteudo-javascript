var a = 2;
let b = 3; // permite ser reatribuida, mas não redeclarada.

var a = 30;
b = 40;

console.log(a, b); // aqui vai imprimir porque ela foi REATRIBUIDA.
//let b = 40 //isso aqui é um erro porque estamos tentando REDECLARAR.

a = 300;
b = 400;

const c = 5;
//c = 50;
console.log(c); // aqui vai dar erro na execução, porque constante não pode ser redeclarada nem reatribuida.
