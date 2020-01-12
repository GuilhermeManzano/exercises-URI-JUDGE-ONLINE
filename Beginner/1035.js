var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines.shift().split(' ');
var A = parseInt(line1[0]);
var B = parseInt(line1[1]);
var C = parseInt(line1[2]);
var D = parseInt(line1[3]);

if ((B > C)&& (D > A) && (C + D) > (A + B) && (C > 0) && (D > 0) && (A % 2 === 0)){
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}
