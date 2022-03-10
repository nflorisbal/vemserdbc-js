// 2) Crie uma função que receba como parâmetro um array de números e retorne
//      um array ordenado (NÃO pode usar a função array.sort());
//     ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 

function toOrderArray(listOfElements) {
    let changes;
    do {
        changes = false;
        for(index = 0; index < listOfElements.length-1; index++) {
            if(listOfElements[index] > listOfElements[index+1]) {
                temporary = listOfElements[index];
                listOfElements[index] = listOfElements[index+1];
                listOfElements[index+1] = temporary;
                changes = true;
            } 
        }
    } while(changes);

    return listOfElements;
}

let array = [4, 5, 7, 3, 0, 5, 2, 2];
console.log(toOrderArray(array));