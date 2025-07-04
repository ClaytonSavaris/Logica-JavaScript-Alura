//---DESAFIO AULA 01---
// alert("Boas Vindas ao nosso Site!");
//let nome = "Lua";
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;

//let mensagemErro = "Erro! Preencha todos os campos!";
//alert(mensagemErro);

//let nomeUsuario = prompt("Informe seu nome: ");
//let idadeUsuario = prompt("Informe sua idade: ");

//if(idadeUsuario >= 18) {
    //alert(nomeUsuario + ", Felizmente você pode tirar a habilitação!");
//}
//else {
    //alert(nomeUsuario + ", Infelizmente você não possui a idade necessária para tirar habilitação!");
//}



//----------------------------------------------------------------------------------------------------------------------------------------
//---DESAFIO AULA 02---
//quantidadeMilhas = prompt("Informe sua quantidade de milhas: ");
//let porcentagemDesconto = 0;

//if(quantidadeMilhas >= 30000){
    //porcentagemDesconto = porcentagemDesconto + 20;
//} else {
    //if(quantidadeMilhas >= 5000){
    //porcentagemDesconto = porcentagemDesconto + 10;
    //}
//}

//alert("Você tem " + porcentagemDesconto + "% de desconto, pois possui " + quantidadeMilhas + " milhas.")

//diaSemana = prompt("Informe qual o dia da semana: ");

//if (diaSemana == "Sábado") {
    //alert("Um ótimo fim de semana!");
//}
//if (diaSemana == "Domingo") {
    //alert("Um ótimo fim de semana!");
//}
//else{
    //alert("Uma ótima semana!");
//}



//----------------------------------------------------------------------------------------------------------------------------------------
//---DESAFIO AULA 03---
//##Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
//##Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
//##Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
//##Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

//alert("Boas Vindas ao Contador Regressivo!");
//let numeroContadorRegressivo = prompt("Informe um número: ")

//while (numeroContadorRegressivo >= 0) {
    //alert(`O número agora é ${numeroContadorRegressivo}`);
    //numeroContadorRegressivo --;
//}

alert("Boas Vindas ao Contador Progressivo!");
let numeroContadorProgressivo = prompt("Informe um número: ")
let numeroContadorAtual = 0;

while (numeroContadorProgressivo >= numeroContadorAtual) {
    alert(`O número agora é ${numeroContadorAtual}`);
    numeroContadorAtual ++;
}