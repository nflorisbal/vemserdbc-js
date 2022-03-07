let t1, t2, p1, media;

t1 = parseFloat(prompt('Digite a primeira nota: '));
t2 = parseFloat(prompt('Digite a segunda nota: '));
p1 = parseFloat(prompt('Digite a terceira nota: '));

if (isNaN(t1) || isNaN(t2) || isNaN(p1)) {
    alert('Uma das notas não é válida.');
} else {
    media = (t1 + t2 + p1) / 3;

    if (media < 5) {
        alert('reprovado =(');
    } else if (media >= 5 && media < 7) {
        alert('recuperação =/');
    } else {
        alert('aprovado! =)');
    }
}   	