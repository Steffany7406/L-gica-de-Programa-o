var num = [25, 47]

const numeroImpares = (X, Y) => Math.floor((Y - X) / 2.0) + 1;
const somaPA = (X, Y) => Math.floor((X + Y) * numeroImpares(X, Y)) / 2.0;

let X = parseInt(num.shift());
let Y = parseInt(num.shift());

if (X > Y) {
    [X, Y] = [Y, X];
}
X += (Math.abs(X) % 2) + 1;
Y -= (Math.abs(Y) % 2) + 1;

console.log(somaPA(X, Y));