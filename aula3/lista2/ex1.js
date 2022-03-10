// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
//     caracteres e que remova todas as ocorrências daquele caracter no array; 
//    // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');

function removeArrayElement(element, array) {
    console.log(array);
    
    for (index = 0; index < array.length; index++) {
        if (element == array[index]) { 
            array.splice(array.indexOf(element), index)
        }
    }
    return array;
}

console.log(removeArrayElement('a', [ 'c', 'a', 'texto', 'a' ] ));
console.log(removeArrayElement(null, [ 'c', 'a', 'texto', 1, null, 'a', '' ]));