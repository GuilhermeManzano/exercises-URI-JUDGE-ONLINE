var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var distancia = n * 2;

console.log(`${distancia} minutos`);
