// 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
//    e todos caracteres em maiúsculo;
//    ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'

// 2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
// 	(porém mantenha ao menos um para continuar com as palavras separadas)
// 	ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'

let oneString = '      Oi, essa é uma   string   qualquer, mas poderia ser uma     importante ;D   ';

function changeString(newString) {
    return newString.toUpperCase().trim();
}

function refineString(newString) {    
    let arrayString = newString.split(' ');
    let refinedString = [];
    for(index = 0; index < arrayString.length; index++) {
        if(arrayString[index] !== '') {
            refinedString.push(`${arrayString[index]}`);
        }
    }
    return refinedString.join(' ');
}

console.log(refineString(changeString(oneString)));