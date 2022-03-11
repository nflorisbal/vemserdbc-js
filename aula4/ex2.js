// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, imprime: 3 e imprime: 7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, imprime somente o: 3

const secondBiggestSmallest= array => {
        
    let smallest = array[0];
    let secSmallest = array[1];
    let biggest = array[0];
    let secBiggest = array[1];

    for (element of array) {
        if(element < smallest) {
            secSmallest = smallest;
            smallest = element;
        } else if (element < secSmallest && element > smallest) {
            secSmallest = element;
        }

        if(element > biggest) {
            secBiggest = biggest;
            biggest = element;
        } else if (element > secBiggest && element < biggest) {
            secBiggest = element;
        }
    }

    if(secBiggest == secSmallest) {
        console.log(`Segundo menor e maior é ${secSmallest}`);
    } else {
        console.log(`Segundo menor é ${secSmallest}`);
        console.log(`Segundo maior é ${secBiggest}`);
    }
}

// secondBiggestSmallest([1, 10, 3, 1, 4, 5, 6, 1, 2, -1, -3 ]);
// secondBiggestSmallest([1, 3, 5, 2, 1]);

secondBiggestSmallest([1, 3, 5, 7, 9] );
// secondBiggestSmallest([ 1, 3, 5]);

