const lista = [1, 2, 7, 10, 18];
let soma = 0;

for (elemento of lista) {
    soma = elemento + soma;
}

console.log(soma);