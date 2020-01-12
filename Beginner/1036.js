var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var delta = (B * B) - (4 * A * C);

if((A === 0) || (delta < 0)){
    console.log("Impossível calcular");
} else {
    var R1 = (-B + Math.sqrt(delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log('R1 = ' + R1.toFixed(5));
    console.log('R2 = ' + R2.toFixed(5));
}
