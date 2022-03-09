let option;
let valor;
let sum = 0;

do {
    option = prompt('Escolha uma operação:\n1. Inserir número\n2. Finalizar');

    if (option === '1') {
        valor = parseFloat(prompt('Insira um valor numérico válido:'));
        if (isNaN(valor) || valor < 0) {
            alert('Valor numérico inválido. Retornando ao menu principal.')
        } else {
            alert('Valor adicionado com sucesso!');
            sum += valor;
        }
    } else if (option === '2') {
        alert(`A soma de todos os números informados foi: ${sum}`);
    } else {
        alert('Operação escolhida é inválida. Tente novamente!');
    }

} while (option != 2);