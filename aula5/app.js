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


let products = [];


// função principal
const start = () => {
    do {
        option = mainMenu();
        
        switch (option){
            case '1':
                console.log('menu 1 abriu');
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
                alert('Trabalho concluído. Aplicação encerrada!');
                break;
            default:
                alert('Opção inválida. Tente novamente.')
        };
    } while (option != '6');
}

// função com a estrutura do menu principal retornando a escolha do usuário
const mainMenu = () => {
    let option = prompt('Operações disponíveis: \n\n1 - Cadastrar produto\n2 - Excluir produto\n3 - Buscar produto'
                        + '\n4 - Listar produtos\n5 - Verificar patrimônio\n\n6 - Encerrar');
    
    return option;
}

const addProduct = () => {
    let id;
    let description;
    let price;

    
    
}

const removeProduct = id => {

}

const findProduct = id => {

}

// chamada da função principal
// start();