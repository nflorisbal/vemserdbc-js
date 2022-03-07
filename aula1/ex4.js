let num1, num2, operation, result;

num1 = parseInt(prompt('Digite o primeiro número: '));
num2 = parseInt(prompt('Digite o segundo número: '));

if (isNaN(num1) || isNaN(num2)) {
    alert('Um dos números digitados não é válido.');
} else {
    operation = prompt('Digite a operação desejada (+, -, * ou  /): ');

    switch (operation) {
        case '+':
            result = num1 + num2;
            alert('Resultado é: ' + result);
            break;
        case '-':
            result = num1 - num2;
            alert('Resultado é: ' + result);
            break;
        case '*':
            result = num1 * num2;
            alert('Resultado é: ' + result);
            break;
        case '/':
            result = num1 / num2;
            if(isFinite(result)) {
                alert('Resultado é: ' + result);
            } else {
                alert('Não é possível realizar divisão por zero.');
            }
            break;
        default:
            alert('Operação inválida!');
    }
}