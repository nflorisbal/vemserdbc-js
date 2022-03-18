class Colaborador {
  id;
  nome;
  dataNascimento;
  email;
  senha;

  constructor(nome, dataNascimento, email, senha) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.senha = senha;
  }
}

//#region Validação Nome
const validarNome = () => {
  const nomeInput = document.getElementById('nome-input-registration');
  const nome = nomeInput.value;

  let possuiSohLetras = [...nome].every(letra => letra.toLowerCase() !== letra.toUpperCase() || letra == ' ');

  const ehValido = possuiSohLetras;

  // para setar o texto de erro em vermelho
  let erroNome = document.getElementById('nome-registration-error');
  erroNome.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}

const primeiraLetra = string => {
  array = string.split(' ');

  for (i in array) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  return array.join(' ');
}
//#endregion Validação Nome

//#region Validação Email
const validarEmail = () => {
  let emailDigitado = document.getElementById('email-input-registration').value;
  let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

  let emailSplit = emailDigitado.split('@');

  let possuiArroba = emailSplit.length > 1;

  let dominioEmail = possuiArroba ? emailSplit[1] : '';
  let dominioEmailSplit = dominioEmail.split('.');

  let possuiPontosNoDominio = dominioEmailSplit.length > 1;

  let possuiCaracteresEntrePontos = dominioEmailSplit.every(d => d.length > 1);

  let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

  let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

  // para setar o texto de erro em vermelho
  let erroEmail = document.getElementById('email-registration-error');
  erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
  let senhaDigitada = document.getElementById('password-input-registration').value;
  let listaCaracteres = senhaDigitada.split('');

  let letras = listaCaracteres.filter(char => char.toLowerCase() !== char.toUpperCase());

  let possuiLetraMaiuscula = letras.some(l => l.toUpperCase() === l); // "A".toUppercase() === "A"
  let possuiLetraMinuscula = letras.some(l => l.toLowerCase() === l);

  let possuiCharEspecial = listaCaracteres.some(char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)));
  let possuiNumero = listaCaracteres.some(char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)));

  let possuiOitoCaracteres = senhaDigitada.length >= 8;

  let naoPossuiEspacos = !senhaDigitada.includes(' ');

  let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula &&
    possuiCharEspecial && possuiNumero && naoPossuiEspacos;

  // para setar o texto de erro em vermelho
  let erroSenha = document.getElementById('password-registration-error');
  erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => {
  let inputData = document.getElementById('date-input-registration');
  let dataDigitada = inputData.value;

  adicionarMascaraData(inputData, dataDigitada);

  let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

  let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

  // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
  let dataAnteriorHoje = dataConvertida.isBefore(moment());

  let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

  // para setar o texto de erro em vermelho
  let erroData = document.getElementById('date-registration-error');
  erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

  return ehValido;
}

const adicionarMascaraData = (input, data) => {
  let listaCaracteres = [...data];

  let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
  if (listaFiltrada && listaFiltrada.length) {
    let dataDigitada = listaFiltrada.join('');

    const { length } = dataDigitada;

    switch (length) {
      case 0: case 1: case 2:
        input.value = dataDigitada;
        break;
      case 3: case 4:
        input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
        break;
      default:
        input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
    }
  }
}
//#endregion Validação Data

const alternarClasses = (elemento, ...classes) => {
  classes.forEach(classe => {
    elemento.classList.toggle(classe);
  });
}

const irPara = (origem, destino) => {
  const elementoOrigem = document.getElementById(origem);
  const elementoDestino = document.getElementById(destino);

  alternarClasses(elementoOrigem, 'd-none', 'd-flex');
  alternarClasses(elementoDestino, 'd-none', 'd-flex');
}

const validarLogin = (dados) => {
  // debugger;
  let data = buscaColaboradores();
  console.log(data);

  // se sucesso
  // irPara('login', 'home');
}

const listarUsuarios = () => {
  // aqui entra lógica de GET para os usuários
};

const validarCadastro = (event) => {
  event.preventDefault();
  let cadastroValido = validarNome() && validarData() && validarEmail() && validarSenha();

  if (cadastroValido) {
    cadastrarUsuario(event);
  }
}

const excluirColaborador = () => {

}

const limparCampos = () => {
  document.getElementById("nome-input-registration").value = '';
  document.getElementById("date-input-registration").value  = '';
  document.getElementById("email-input-registration").value  = '';
  document.getElementById("password-input-registration").value  = '';
}

const cadastrarUsuario = (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome-input-registration").value;
  let dataNascimento = document.getElementById("date-input-registration").value;
  let email = document.getElementById("email-input-registration").value;
  let senha = document.getElementById("password-input-registration").value;

  nome = primeiraLetra(nome);

  const objColaborador = new Colaborador(nome, dataNascimento, email, senha);

  axios.post(`http://localhost:3000/colaboradores`, objColaborador)
    .then((sucesso) => {
      // data possui o objeto inserido, no caso do post
      sucesso.data.id;
      
      const li = document.createElement('li');
      li.setAttribute('id', `colab-${sucesso.data.id}`);

      limparCampos();
      irPara('registration', 'login');
    }, (erro) => {
      // debugger
    });
};


// const buscaColaboradores = () => {
let datas = axios.get(`http://localhost:3000/colaboradores`).then((sucesso) => {
  sucesso.data;
  console.log(sucesso.data);
  // return sucesso.data;
}, (erro) => {
  // debugger
});
// }

console.log(datas);