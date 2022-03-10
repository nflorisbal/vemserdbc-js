// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
//      qualquer como parâmetro e que adiciona esse elemento à lista;


// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;


// 4c) Crie uma função para remover um elemento específico da lista;
//      ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
//      e chamamos a função  removeElemento('Tiago')
//      deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
//      Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.

let ourList = [];


// A
function addElement(element) {
    ourList.push(element);
}

addElement(-18);
addElement('a');
addElement(4);
addElement('Tiago');
addElement(187);
addElement(null);

console.log(ourList);

// B
function removeLast() {
    ourList.pop();
}

function removeFirst() {
    ourList.shift();
}

removeFirst();
removeLast();

console.log(ourList);

// C
function removeThis(element) {

}