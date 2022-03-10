// 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
//    chamada caso algum dos números informados seja inválido.
//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';


let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o segundo  número: '));

function Sum(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        callback();
    } else {
        console.log(`Soma igual: ${a + b}`);
    }
}

function validateNumber() {
    console.log('Algum número digitado foi inválido');
}

Sum(num1, num2, validateNumber);