let valor = prompt('Digite um texto:');

if (valor === 'SIM') {
    alert('Parabéns');
} else if (valor === 'Não') {
    alert(prompt('Digite novamente um texto:'));
} else {
    confirm('Você tem noção dos seus atos?');
}