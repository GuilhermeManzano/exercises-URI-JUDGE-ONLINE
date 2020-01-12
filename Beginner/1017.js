var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = parseInt(lines.shift());
var vm = parseInt(lines.shift());
var distancia = vm * tempo;
var litros = distancia / 12;

console.log(litros.toFixed(3));
