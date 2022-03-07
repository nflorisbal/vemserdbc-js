let isFriday, isTwoGreaterThanFour, isValueEmpty;

isFriday = confirm('Hoje é sexta-feira?');
isTwoGreaterThanFour = (2 < 4);

let valor = prompt("Digite algo:");

isValueEmpty = (valor === null) || (valor === undefined) || (valor === '');
console.log(isValueEmpty);