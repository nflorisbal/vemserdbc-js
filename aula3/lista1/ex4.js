// 4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
//    existe no array e também qual a posição dele (índice)
// Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
// Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'

function findElement(oneList, oneElement) {
    let found = oneList.includes(oneElement); 
    return found 
        ? `O elemento existe no array e a posição dele é: ${oneList.indexOf(oneElement)}`
        : 'O elemento não existe no array';
}

console.log(findElement(['a', 'cachorro', 255], 'a' ));
console.log(findElement(['a', 'cachorro', 255], 'b' ));
console.log(findElement(['a', 'cachorro', 255], 100 ));
console.log(findElement(['a', 'cachorro', 255], '255' ));
console.log(findElement(['a', 'cachorro', 255], 255 ));

