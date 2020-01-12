var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(' ');
var cod =  parseInt(line[0]);
var qt = parseInt(line[1]);

switch (cod) {
    case 1:
        preco = qt * 4.00;
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case 2:
        preco = qt * 4.50;
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case 3:
        preco = qt * 5.00;
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case 4:
        preco = qt * 2.00;
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case 5:
        preco = qt * 1.50;
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
}
