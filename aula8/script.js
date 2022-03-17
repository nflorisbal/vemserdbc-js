const CLASS_UI_COLAB = [ 'w-50', 'border', 'border-primary', 'rounded', 'flex-column', 'd-flex', 'align-items-center', 'justify-content-center', 'd-none'];
const CLASS_LI_COLAB = [ 'w-100', 'mt-2', 'p-3', 'd-flex', 'align-items-center', 'justify-content-between'];

let id = 1;
let listaColaboradores = [ ];

class Colaborador {
	id;
	nome;
	dataNascimento;
	email;
	senha;

	constructor (nome, dataNascimento, email, senha) {
		this.id = id++;
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.email = email;
		this.senha = senha;
	}
}

const adicionarAtributos = (elemento, id, classes) => {
  elemento.setAttribute('id', id);
  elemento.classList.add(...classes);
}

const mudarTituloColab = () => {
	const tituloColab = document.getElementById('titulo-colab');
	listaColaboradores.length === 0 
		? tituloColab.textContent = 'Nenhum colaborador cadastrado ainda.' 
		:	tituloColab.textContent = 'Lista de colaboradores:';
}

const msgDadoValido = (validade, id) => {
	const component = document.getElementById(id);

	validade ? component.classList.add('d-none') : component.classList.remove('d-none');
}

const validarEmail = () => {
	const ehValido = false;
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
	

	let data = moment(input.value, 'DD/MM/YYYY');

	let ehDataValida = data.isValid();
	let ehDataFutura = data.isAfter(new Date);
	let ehEntreDatas = data.isBetween(moment().subtract(26, 'years'), moment().subtract(18, 'years'));

	adicionarMascaraData(input, event);

	const ehValido = ehDataValida && ehEntreDatas && !ehDataFutura;
	
	msgDadoValido(ehValido, 'data-erro');

	return ehValido;
}

const adicionarMascaraData = (input, event) => {
}

const adicionarColaborador = (/*nome, data, email, senha*/) => {
	let containerColaboradores = document.getElementById('container-colaboradores');
	
	let uiColab = document.createElement('ui');
	adicionarAtributos(uiColab, 'ui-colab', CLASS_UI_COLAB);
	

	listaColaboradores.length === 0 
		? uiColab.classList.add('d-none')
		:	uiColab.classList.remove('d-none');

	// let liColab = document.createElement('li');

	// listaColaboradores.push(new Colaborador(nome, data, email, senha));
}

const validarCadastro = (event) => {
	event.preventDefault();
	adicionarColaborador()


	// console.log(`${validarData()}`)
	// console.log(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
}