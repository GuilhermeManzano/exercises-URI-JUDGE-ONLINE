var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines.shift());
var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;
var moeda100 = 0;
var moeda50 = 0;
var moeda25 = 0;
var moeda10 = 0;
var moeda5 = 0;
var moeda1 = 0;

while (n >= 100) {
    n = n - 100;
    nota100++;
}
while (n >= 50) {
    n = n - 50;
    nota50++;
}
while (n >= 20) {
    n = n - 20;
    nota20++;
}
while (n >= 10) {
    n = n - 10;
    nota10++;
}
while (n >= 5) {
    n = n - 5;
    nota5++;
}
while (n >= 2) {
    n = n - 2;
    nota2++;
}
while (n >= 1) {
    n = n - 1;
    moeda100++;
}
while (n >= 0.5) {
    n = n - 0.5;
    moeda50++;
}
while (n >= 0.25) {
    n = n - 0.25;
    moeda25++;
}
while (n >= 0.1) {
    n = n - 0.1;
    moeda10++;
}
while (n >= 0.05) {
    n = n - 0.05;
    moeda5++;
}
while (n >= 0.01) {
    n = n - 0.01;
    moeda1++;
}

console.log(`NOTAS:`);
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log(`MOEDA:`);
console.log(`${moeda100} moeda(s) de R$ 1.00`);
console.log(`${moeda50} nmoeda(s) deR$ 0.50`);
console.log(`${moeda25} moeda(s) de R$ 0.25`);
console.log(`${moeda10} moeda(s) de R$ 0.10`);
console.log(`${moeda5} moeda(s) de R$ 0.05`);
console.log(`${moeda1} moeda(s) de R$ 0.01`);
