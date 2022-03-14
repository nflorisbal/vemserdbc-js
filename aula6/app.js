/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

  Colaborador {
    id;
    nome;
    marcacoesPonto; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto( dia, hora );
  };

  Marcacao {
      dia; (só um number mesmo, ex: 22 )
      horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
      validaAlgo(valorParaValidar) {
          // imaginem uma lógica validando aqui
          return ehValido;
      }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)
  
  if(validador.validaAlgo('Valor qualquer')) {
      // só pra exemplificar como utilizar
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  9 - Encerrar;
*/


// variáveis globais
let employees = [];
let uiHandler = new PromptsAndAlerts();
let validate = new Validation();

// classe para o colaborador
class Employee {
    id;
    name;
    register;

    constructor(name) {
        this.id = Employee.incrementId();
        this.name = name;
    }

    checkInOut(day, hours) {
        this.register = new Register(day, hours);
    }

    static incrementId() {
        if (!this.id) this.id = 1;
        else this.id++;
        return this.id;
    }
}

// classe para marcação de ponto
class Register {
    day;
    hours;

    constructor(day, hours) {
        this.day = day;
        this.hours = hours;
    }
}

// classe para validações
class Validation {

}

// classe com alertas, prompts e logs para o usuário
class PromptsAndAlerts {
    menu() {
        let option = prompt('=== SISTEMA DE COLABORADORES ===\n\n(1) Cadastrar colaborador\n' +
        '(2) Marcar ponto\n(3) Ver lista de colaboradores\n(4) Ver lista de colaboradores sem ponto\n\n(9) Encerrar');
        
        return option;
    }

    invalidOption() {
        alert('Opção inválida. Tente novamente.');
    }

    exitApp() {
        alert('Trabalho concluído. Aplicação encerrada!');
    }
}

// função para cadastro do colaborador
const addEmployee = () => {

}

// função inicial
const initApp = () => {
    let option;
    
    do {
        option = uiHandler.menu();

        switch (option) {
            case '1':
                addEmployee();
                break;
            case '2':
                console.log('menu2');
                break;
            case '3':
                console.table(employees);
                break;
            case '4':
                console.log('menu4');
                break;
            case '9': case null:
                uiHandler.exitApp();
                break;
            default:
                uiHandler.invalidOption();
        }
    } while (option !== '9' && option !== null);
}

// dados de teste
employees.push(new Employee('nelson'));
employees.push(new Employee('gabriel'));
employees.push(new Employee('nathalia'));

// chamada da função inicial
initApp();

