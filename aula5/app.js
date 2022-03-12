/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+

  Obs: Utilizem Arrow Functions;

  Imaginando que teremos o seguinte produto:
  
  (modelo do objeto)
  {
    id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
    descricao: "",  (string)
    preco: 0        (number)
  }

  Teremos também uma lista de produtos que será uma variável de escopo global no sistema (let, não utilizem var);

  Criem um sistema onde seja possível:

  1) Cadastrar um produto;
    - cuidado para não ter o mesmo id (identificador);

  2) Excluir um produto pelo código;

  3) Encontrar um produto pelo código;

  4a) Imprimir no console em tabela a lista de produtos cadastrados;

  4b) Imprimir no console em tabela a lista de descrições dos produtos cadastrados;

  4c) Selecionar uma descrição desejada e:
    Imprimir no console em tabela somente a descrição e preço dos produtos que possuem aquela descrição escolhida; 

  5) Verificar o total de patrimônio da loja (preço total de todos os produtos);
  
  6) Verificar se todos os produtos cadastrados possuem um preço válido;
*/

// variáveis globais
let products = [];
let id = 0;

// função principal
const start = () => {

    let option;

    do {
        option = mainMenu();
        // debugger;
        switch (option) {
            case '1':
                addProduct();
                break;
            case '2':
                console.log('menu 2 abriu');
                break;
            case '3':
                console.log('menu 3 abriu');
                break;
            case '4':
                console.log('menu 4 abriu');
                break;
            case '5':
                console.log('menu 5 abriu');
                break;
            case '6':
            case null:
                alert('Trabalho concluído. Aplicação encerrada!');
                break;
            default:
                alert('Opção inválida. Tente novamente.');
        };
    } while (option !== '6' && option !== null);
}

// função com a estrutura do menu principal retornando a escolha do usuário
const mainMenu = () => {
    let option = prompt('Operações disponíveis: \n\n1 - Cadastrar produto\n2 - Excluir produto\n3 - Buscar produto'
        + '\n4 - Listar produtos\n5 - Verificar patrimônio\n\n6 - Encerrar');

    return option;
}

// função para incluir produtos 
const addProduct = () => {

    let description = textValidate(prompt('Inserir descrição do produto:'));
    console.log(description);
    let price = priceValidate(prompt('Inserir preço do produto:'));
    // console.log(price);

    // id++;
}

const removeProduct = id => {

}

const findProduct = id => {

}

// validação da descrição
const textValidate = text => {
    let validate = false;
    do {
        if (text === null)
            return;
        else if (text !== '' && text.toUpperCase() !== text.toLowerCase())
            validate = true;
        else
            text = prompt('Informação inserida é inválida. Tente novamente (descrição deve conter texto).')
    } while (!validate);

    return text;
}

// validação do preço
const priceValidate = price => {
    let validate = false;
    do {
        
    }
}


// chamada da função principal
start();