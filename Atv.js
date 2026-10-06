const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
const rl = readline.createInterface({ input, output });

let continuar = 's';

while (continuar.toLowerCase() === 's') {
let numero1 = Number(await rl.question('Digite o primeiro número: '));
let numero2 = Number(await rl.question('Digite o segundo número: '));

console.log('\nResultados:');
console.log('Soma:', numero1 + numero2);
console.log('Subtração:', numero1 - numero2);
console.log('Multiplicação:', numero1 * numero2);

if (numero2 !== 0) {
console.log('Divisão:', numero1 / numero2);
} else {
console.log('Divisão: não é possível dividir por zero.');
 } 
continuar = await rl.question('\nDeseja realizar outro cálculo? (s/n): ');
console.log();
}
rl.close();
}

main();
