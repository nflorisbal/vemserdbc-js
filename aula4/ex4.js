// 4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
//   da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
  
//   ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')  
//   =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes

const vowelConsonantCount = string => {
    
    let vowels = 'aeiou';
    let consonants = 'qwrtypsdfghjklçzxcvbnm';
    let countVowel = 0;
    let countConsonant = 0;
    
    for (i = 0; i < string.length; i++) {
        if(vowels.indexOf(string[i].toLowerCase()) !== -1) {
            countVowel++;
        } else if (consonants.indexOf(string[i].toLowerCase()) !== -1) {
            countConsonant++;
        }
    }

    console.log(`A string '${string}' possui ${countVowel} vogais e ${countConsonant} consoantes.`);
}

vowelConsonantCount('Oi, tenho 5 anos de idade!!! ;D');