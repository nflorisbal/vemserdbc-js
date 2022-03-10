// 3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
//     e retorne uma concatenação destes 2 arrays;

let firstArray = [ 'a', 123, 'teste', null ];
let secondArray = [ 1000, undefined, -10, 'abc'];

function concatArrays(a, b) {
    return a.concat(b);
}

console.log(concatArrays(firstArray, secondArray));