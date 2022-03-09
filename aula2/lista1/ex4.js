do {
    opcao = parseInt(prompt("1 - continuar perguntando\n2 - parar de perguntar"));
    if (opcao !== 1 && opcao !== 2) {
        alert('Opção digitada inválida. Tente novamente!');
    }
} while (opcao !== 2);