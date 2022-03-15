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

// classe colaborador
class Employee {
    id;
    name;
    registers = [];

    constructor(name) {
        this.id = Employee.incrementId();
        this.name = name;
    }

    checkInOut(day, hours) {
        let register = new Register(day, hours)
        this.registers.push(register);
    }

    static incrementId() {
        if (!this.id) this.id = 1;
        else this.id++;
        return this.id;
    }
}

// classe marcação de ponto
class Register {
    day;
    hours;

    constructor(day, hours) {
        this.day = day;
        this.hours = hours;
    }
}

// classe validações
class Validation {
    nameIsValid = name => {
        let validation = false;

        if (name === null) return;
        if (name !== '' && name.toUpperCase() !== name.toLowerCase())
            validation = true;

        return validation;
    }

    idIsValid = id => {
        let validation = false;

        if (id === null) return;
        if (!isNaN(id) && !id.includes('.') && employees.some(employee => employee.id === parseInt(id)))
            validation = true;

        return validation;
    }
}

// classe alertas, prompts e logs
class PromptsAndAlerts {
    menu() {
        let option = prompt('=== SISTEMA DE COLABORADORES ===\n\n(1) Cadastrar colaborador\n' +
            '(2) Marcar ponto\n(3) Ver lista de colaboradores\n(4) Ver lista de colaboradores sem ponto\n\n(9) Encerrar');
        return option;
    }

    exitAppMsg() {
        alert('Trabalho concluído. Aplicação encerrada!');
    }

    invalidOptionMsg() {
        alert('Operação inválida. Tente novamente.');
    }

    askNameMsg() {
        let name = prompt('Digite o nome do colaborador:');
        return name;
    }

    invalidNameMsg() {
        alert('Nome inválido. Tente novamente.');
    }

    newEmployeeSuccessMsg(name) {
        alert(`Colaborador ${name.toUpperCase()} foi cadastrado com sucesso.`);
    }

    askIdMsg() {
        let id = prompt('Digite o ID do colaborador para registrar o ponto:');
        return id;
    }

    invalidIdMsg() {
        alert('ID inválido ou inexistente. Tente novamente.');
    }

    newRegisterSuccessMsg() {
        alert('Registro de ponto realizado com sucesso');
    }

    printEmployees() {
        if (employees.length === 0)
            alert('Nenhum colaborador cadastrado.');
        else
            console.table(employees, ['id', 'name']);
    }

    printEmployeesWithoutRegister() {
        if(employees. length === 0)
            alert('Nenhum colaborador cadastrado.');
        else {
            let withoutRegister = employees.filter(employee => employee.registers.length === 0);
            if(withoutRegister.length === 0)
                alert('Todos os colaboradores registraram o ponto.')
            else
                console.table(withoutRegister);
        }
    }
}

// objetos utilitários
const uiHandler = new PromptsAndAlerts();
const validate = new Validation();

// função para cadastro do colaborador
const addEmployee = () => {
    let name;
    let valid;

    do{
        name = uiHandler.askNameMsg();
        valid = validate.nameIsValid(name);
    
        if (valid === undefined) {
            return;
        } else if (valid) {
            employees.push(new Employee(name));
            uiHandler.newEmployeeSuccessMsg(name);
        } else {
            uiHandler.invalidNameMsg();
        }
    }while(!valid);
}

// função para marcação do ponto
const addRegister = () => {
    let today = new Date();
    let day = today.getDate();
    let time = `${today.getHours()}:${today.getMinutes()}`;
    let id;
    let valid;

    do {
        id = uiHandler.askIdMsg();
        valid = validate.idIsValid(id);
        if (valid === undefined) {
            return;
        } else if (valid) {
            let employee = employees.find(employee => employee.id === parseInt(id));
            employee.checkInOut(day, time);
            uiHandler.newRegisterSuccessMsg();
        } else {
            uiHandler.invalidIdMsg();
        }
    }while(!valid);
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
                addRegister();
                break;
            case '3':
                uiHandler.printEmployees();
                break;
            case '4':
                uiHandler.printEmployeesWithoutRegister();
                break;
            case '9': case null:
                uiHandler.exitAppMsg();
                break;
            default:
                uiHandler.invalidOptionMsg();
        }
    } while (option !== '9' && option !== null);
}

// dados de teste
// employees.push(new Employee('NELSON FLORISBAL'));
// employees.push(new Employee('GABRIEL GOMES'));
// employees.push(new Employee('NATHALIA DUARTE'));

// chamada da função inicial
initApp();