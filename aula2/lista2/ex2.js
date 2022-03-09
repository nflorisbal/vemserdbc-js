// 2) Faça um programa que calcule a soma dos primeiros 50 números pares;

let even = 0;

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        even += i;
    }
}

console.log(even);