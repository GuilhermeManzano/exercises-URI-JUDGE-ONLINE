var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var hora = 0;
var minuto = 0;
var segundo = 0;

while(n >= 3600) {
  n = n - 3600;
  hora += 1;
} 
while(n >= 60) {
  n = n - 60;
  minuto += 1;
} 
while(n >= 1) {
  n = n -1;
  segundo += 1;
} 

console.log(`${hora}:${minuto}:${segundo}`);
