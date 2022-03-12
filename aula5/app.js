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
let id = 4;

// função principal
const start = () => {

    let option;

    do {
        console.table(products);

        option = mainMenu();

        switch (option) {
            case '1':
                addProduct();
                break;
            case '2':
                removeProduct();
                break;
            case '3':
                findProduct();
                break;
            case '4':
                printTable();
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
    let option = prompt('=== Cadastro de Produtos ===\n\nOperações disponíveis: \n\n(1) Cadastrar produto\n(2) Excluir produto\n(3) Buscar produto'
        + '\n(4) Listar produtos\n(5) Verificar patrimônio\n\n(6) Encerrar');

    return option;
}

const menuPrintTable = () => {
    let option = prompt('--- Impressão de Tabelas ---\n\nOperações disponíveis: \n\n(1) Imprimir tabela completa\n(2) Imprimir tabela de descrição\n(3) Imprimir produtos específicos'
        + '\n\n(4) Voltar');

    return option;
}

// função para incluir produtos 
const addProduct = () => {
    let description = textValidate(prompt('Inserir descrição do produto:'));
    let price;
    let product;

    if (description !== undefined) {
        price = priceValidate(prompt(`Inserir preço do(a) ${description}:`))
        if (price !== undefined) {
            product = {
                'id': id,
                'description': description,
                'price': price
            };
            products.push(product);
            alert("Produto inserido com sucesso!");
            id++;
        } else {
            alert(abort());
            return;
        }
    } else {
        alert(abort());
        return;
    }
}

// função para remover produtos (pelo id)
const removeProduct = () => {
    if (products.length > 0) {
        let idProduct = idValidate(prompt('Inserir ID do produto a ser removido:'));

        if (idProduct !== undefined) {
            products = products.filter(product => product.id !== idProduct);
            alert("Produto removido com sucesso!");
        } else {
            alert(abort());
            return;
        }
    } else
        alert('Lista de produtos vazia. Voltando ao menu principal.')
}

// função para buscar produtos (pelo id)
const findProduct = () => {
    let tmp = [];
    if (products.length > 0) {
        let idProduct = idValidate(prompt('Inserir ID do produto a ser buscado:'));

        if (idProduct !== undefined) {
            tmp = products.find(product => product.id == idProduct);
            alert(`Produto encontrado!\n\nDescr.: ${tmp.description}\nValor: ${tmp.price}`);
        } else {
            alert(abort());
            return;
        }
    } else
        alert('Lista de produtos vazia. Voltando ao menu principal.')
}

// função para imprimir as tabelas
const printTable = () => {
    let option;

    do {
        option = menuPrintTable();
        switch (option) {
            case '1':
                console.log('menu 1');
                break;
            case '2': ;
                console.log('menu 2');
                break;
            case '3': ;
                console.log('menu 3');
                break;
            case '4': ;
            case null:
                break;
            default:
                alert('Opção inválida. Tente novamente.');
        }
    } while (option !== '4' && option !== null)
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
            text = prompt('Informação inserida é inválida. Tente novamente (descrição deve conter texto).');
    } while (!validate);

    return text;
}

// validação do preço
const priceValidate = price => {
    let validate = false;
    do {
        if (price === null)
            return;

        price = price.replaceAll(',', '.');

        if (!isNaN(price) && price > 0)
            validate = true;
        else
            price = prompt('Informação inserida é inválida. Tente novamente (preço deve conter apenas números).')
    } while (!validate);

    return Number(price).toFixed(2);
}

// validação do id
const idValidate = id => {
    let validate = false;
    do {
        if (id === null)
            return;
        else if (id !== '' && !isNaN(id) && id > 0 && !id.includes('.') && products.some(product => product.id === parseInt(id)))
            validate = true;
        else
            id = prompt('ID informado inválido ou não cadastrado. Tente novamente (ID deve conter somente números).');
    } while (!validate);

    return parseInt(id);
}

// mensagem para operação cancelada antes de concluir
const abort = () => {
    return 'Operação cancelada. Retornando ao menu inicial.';
}


// array de teste
products = [{ id: 1, description: 'sabonete', price: '2.99' }, { id: 2, description: 'pasta de dente', price: '4.99' }, { id: 3, description: 'shampoo', price: '7.99' },];


// chamada da função principal
start();