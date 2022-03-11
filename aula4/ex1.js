// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914)  retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);

// function invertNumber(number) {}
const invertNumber = number => { 
    inverted = [];
    list = String(number).split('');
    size = list.length;

    for(let i = 0; i < size; i++) {
         inverted.push(list.pop());
    }

    return parseInt(inverted.join(''));
}

console.log(invertNumber(123456));