/*1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual;*/

let salary = 1000;
let year = 2016;
let currentYear =  2022;
let raise = 0.015;

do {
    console.log(`Salário de ${salary.toFixed(2)} em ${year}`);
    
    year++;
    
    if (year >= 2018) {
        raise += raise;
    }
        salary += salary * raise;
    
} while (year <= currentYear);