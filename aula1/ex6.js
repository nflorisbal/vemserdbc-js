let option;

option = parseInt(prompt("1 - Fazer chekin\n2 - Fazer checkout\n3 - Estender hospedagem\n4 - Sair"));

switch (option) {
    case 1:
        alert('Bem-vindo(a) ao nosso hotel!');
        break;
    case 2:
        if (confirm('Você tem certeza?')) {
            alert('Ok. Obrigado por sua visita!');
        }
        break;
    case 3:
        let days = prompt('Quantos dias gostaria de estender?')
        if (!isNaN(days)) {
            alert(`Um prazer tê-lo aqui por mais ${days} dia(s)!`);
        } else {
            alert('Número de dias informados é inválido.');
        }
        break;
    case 4:
        alert('Ok!');
        break;
    default:
        alert('Operação inválida');
}