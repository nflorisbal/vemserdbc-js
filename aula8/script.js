const CLASS_UI_COLAB = [ 'w-50', 'border', 'border-primary', 'rounded', 'flex-column', 'd-flex', 'align-items-center', 'justify-content-center' ]
const CLASS_LI_COLAB = [ 'w-100', 'mt-2', 'p-3', 'd-flex', 'align-items-center', 'justify-content-between' ]
const TITULO_COLAB_VAZIO = 'Nenhum colaborador cadastrado ainda';
const TITULO_COLAB = 'Colaboradores';

let id = 0;
let listaColaboradores = [];

class Colaborador {
	id;
	nome;
	dataNascimento;
	email;
	senha;

	constructor(nome, dataNascimento, email, senha) {
		this.id = id++;
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.email = email;
		this.senha = senha;
	}
}

const adicionarAtributos = (elemento, id, classes) => {
	elemento.setAttribute('id', id);
	if(classes !== undefined) elemento.classList.add(...classes);
}

const mudarTituloColab = () => {
	const tituloColab = document.getElementById('titulo-colab');
	id === 0
		? tituloColab.textContent = TITULO_COLAB_VAZIO
		: tituloColab.textContent = TITULO_COLAB;
}

const msgDadoValido = (validade, id) => {
	const component = document.getElementById(id);

	validade ? component.classList.add('d-none') : component.classList.remove('d-none');
}

const criarParagrafo = (texto) => {
	let elemento = document.createElement('p');
	elemento.textContent = texto;

	return elemento;
}

const validarNome = () => {
	const nomeInput = document.getElementById('nome-input');
	const nome = nomeInput.value;

	let possuiSohLetras = [...nome].every(letra => letra.toLowerCase() !== letra.toUpperCase() || letra == ' ');

	const ehValido = possuiSohLetras;
	msgDadoValido(ehValido, 'nome-erro');
	
	return ehValido;
}

const validarEmail = () => {
	const email = document.getElementById('email-input').value;
	
	if (email == '') return;

	let primeiroCaracter = email[0].toLowerCase() !== email[0].toUpperCase();
	let possuiArroba = email.includes('@');
	let emails = email.split('@');
	



	const ehValido = primeiroCaracter && possuiArroba;
	msgDadoValido(ehValido, 'email-erro');
	
	return ehValido;
}

const validarSenha = (event) => {
	const input = event ? event.target : document.getElementById('senha-input');
	const { value: senha } = input;
	
	input.value = input.value.replaceAll(' ', '');
	
	let caracteresSenha = [...senha];
	let possuiLetraMinuscula = caracteresSenha.some(c => c.toLowerCase() === c);
	let possuiLetraMaiuscula = caracteresSenha.some(c => c.toUpperCase() === c);
	let possuiEspecial = caracteresSenha.some(c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
	let possuiNumero = caracteresSenha.some(c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));
	let peloMenosOito = senha.length >= 8;

	const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
	msgDadoValido(ehValido, 'senha-erro');

	return ehValido;
}

const validarData = (event) => {
	const input = event ? event.target : document.getElementById('data-input');
	const data = moment(input.value, 'DD/MM/YYYY');
	
	let ehDataValida = data.isValid();
	let ehDataFutura = data.isAfter(new Date);
	let ehEntreDatas = data.isBetween(moment().subtract(26, 'years'), moment().subtract(18, 'years'));

	adicionarMascaraData(input, event);

	const ehValido = ehDataValida && ehEntreDatas && !ehDataFutura;
	msgDadoValido(ehValido, 'data-erro');

	return ehValido;
}

const adicionarMascaraData = (input, event) => {
	let data = input.value;
	data = input.value.replaceAll('/', '');
	let dia = data.substring(0, 2);
	let mes = data.substring(2, 4);
	let ano = data.substring(4);

	let dataEspalhada = [...data];

	if(event.code !== 'Backspace' && event.code !== 'Delete') {
		switch (dataEspalhada.length) {
			case 2:
				input.value = `${dia}/`;
				break;
			case 5:
				input.value = `${dia}/${mes}/${ano}`;
				break;
		}
	}
}

const adicionarColaborador = (nome, data, email, senha) => {
	listaColaboradores.push(new Colaborador(nome, data, email, senha));
	mudarTituloColab();
		
	let containerColaboradores = document.getElementById('container-colaboradores');
	let ulColab = document.createElement('ul');
	
	
	adicionarAtributos(ulColab, 'ul-colab', CLASS_UI_COLAB);
	containerColaboradores.appendChild(ulColab);
	

	let liColab = document.createElement('li');
	adicionarAtributos(liColab, `li-colab-${id}`, CLASS_LI_COLAB);

	let divColabNome = document.createElement('div');
	let divColabData = document.createElement('div');
	let divColabEmail = document.createElement('div');
	adicionarAtributos(divColabNome, `nome-colab-${id}`);
	adicionarAtributos(divColabData, `data-colab-${id}`);
	adicionarAtributos(divColabEmail, `email-colab-${id}`);

	ulColab.appendChild(liColab);
	liColab.append(divColabNome, divColabData, divColabEmail);
	divColabNome.append(criarParagrafo('Nome:'), criarParagrafo(`${nome}`));
	divColabData.append(criarParagrafo('Nascimento:'), criarParagrafo(`${data}`));
	divColabEmail.append(criarParagrafo('E-mail:'), criarParagrafo(`${email}`));

	console.log(listaColaboradores);
}

const validarCadastro = (event) => {
	event.preventDefault();

	const nomeColab = document.getElementById('nome-input').value;
	const dataColab = document.getElementById('data-input').value;
	const emailColab = document.getElementById('email-input').value;
	const senhaColab = document.getElementById('senha-input').value;

	// if(validarNome() && validarData() && validarEmail() && validarSenha()) adicionarColaborador()
	adicionarColaborador(nomeColab, dataColab, emailColab, senhaColab);

	// console.log(`Nome ${validarNome()}`);
	// console.log(`Data ${validarData()}`);
	// console.log(`Email ${validarEmail()}`);
	// console.log(`Senha ${validarSenha()}`);
}