var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var ano = 0; 
var mes = 0;
var dia = 0;

while(n >= 365){
  n = n - 365;
  ano ++;
}
while(n >= 30){
  n = n - 30;
  mes ++;
}
dia = n;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);
