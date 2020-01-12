var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var pi = 3.14159;
var esfera = ((4/3.0) * pi * (raio * raio * raio));

console.log("VOLUME = " + esfera.toFixed(3));
