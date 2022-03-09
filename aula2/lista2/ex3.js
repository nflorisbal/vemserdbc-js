/*3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;*/

let multiTable = parseFloat(prompt('Qual tabuada você deseja visualizar?'));

if (isNaN(multiTable) || !Number.isInteger(multiTable)) {
    alert("Valor digitado não é um valor válido.");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${multiTable} = ${i * multiTable}`);
    }
}