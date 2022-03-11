// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

const capitalizeFirstLetters = string => {
    array = string.split(' ');

    for (i in array) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    return array.join(' ');
}

let frase = 'hoje faremos o trabalho em dupla, que legal - sqn';
console.log(capitalizeFirstLetters(frase));