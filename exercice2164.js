var input = document.getElementById("input");
var lines = input.split('\n');

function potencia(){
const cont = (base, expoente) => {
    if (expoente === 1) return base;
    if (expoente % 2) return base * cont(base, expoente - 1);

    let i = cont(base, Math.floor(expoente / 2));
    return i * i;
};

const Fibonacci = (n) => (cont((1 + Math.sqrt(5)) / 2, n) - cont((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5);

let n = parseInt(lines.shift());
alert(Fibonacci(n).toFixed(1)); 
}