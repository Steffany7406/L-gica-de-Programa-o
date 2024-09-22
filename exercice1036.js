// Math.sqrt = Retorna a raiz quadrada de um número
// Math.pow = Retorna o valor de um número elevado a uma potencia especifica aceitando duas expressões base e expoente
const A = parseFloat(prompt("Enter value for A: "));
const B = parseFloat(prompt("Enter value for B: "));
const C = parseFloat(prompt("Enter value for C: "));

let delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0) {
  alert("Impossivel calcular");
} else {
  let count1 = (-B + Math.sqrt(delta)) / (2 * A);
  let count2 = (-B - Math.sqrt(delta)) / (2 * A);

  alert(`Raiz 1 = ${count1.toFixed(5)}`);
  alert(`Raiz 2 = ${count2.toFixed(5)}`);
}
