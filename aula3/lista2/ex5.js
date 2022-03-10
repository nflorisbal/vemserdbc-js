// 5) Crie uma função que gera um número aleátorio entre 0 e 100;


// 5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
//     OBS: só podem ser adicionados a esta lista os seguintes números:
//     - números ímpares que estão entre 14 e 50;
//     - números múltiplos de 12;

function randomNumber() {
    return Math.round(Math.random() * 100);
}

function randomListNumber(list, randomNumber, many) {
    do {
        element = randomNumber();
        
        if(element % 12 === 0 || element % 2 !== 0 && element > 14 && element < 50) {
            list.push(element);
        }

    } while (list.length < many)
    
    return list;
}

console.log(randomListNumber(a = [], randomNumber, 10));
