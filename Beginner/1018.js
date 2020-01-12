var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var resp = N;
var Nota100Count = 0;
var Nota50Count = 0;
var Nota20Count = 0;
var Nota10Count = 0;
var Nota5Count = 0;
var Nota2Count = 0;
var Nota1Count = 0;

while (N >= 100) {
    N = N - 100;
    Nota100Count++;
}
while (N >= 50) {
    N = N - 50;
    Nota50Count++;
}
while (N >= 20) {
    N = N - 20;
    Nota20Count++;
}
while (N >= 10) {
    N = N - 10;
    Nota10Count++;
}
while (N >= 5) {
    N = N - 5;
    Nota5Count++;
}
while (N >= 2) {
    N = N - 2;
    Nota2Count++;
}
while (N === 1) {
    N = N - 1;
    Nota1Count = 1;
}

console.log(N);
console.log(`${Nota100Count} nota(s) de R$ 100,00`);
console.log(`${Nota50Count} nota(s) de R$ 50,00`);
console.log(`${Nota20Count} nota(s) de R$ 20,00`);
console.log(`${Nota10Count} nota(s) de R$ 10,00`);
console.log(`${Nota5Count} nota(s) de R$ 5,00`);
console.log(`${Nota2Count} nota(s) de R$ 2,00`);
console.log(`${Nota1Count} nota(s) de R$ 1,00`);
