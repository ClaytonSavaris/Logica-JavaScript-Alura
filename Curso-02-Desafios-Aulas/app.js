let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function cliqueBotaoConsole() {
    console.log("O botão Click foi pressionado!");
}

function cliqueMensagemAlerta() {
    alert("Eu Amo JS");
}

function informeCidade() {
    cidade = prompt("Informe o nome de uma cidade: ");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somaNumeros() {
    let numero1 = prompt("Informe o primeiro número: ");
    let numero2 = prompt("Informe o segundo número: ");
    let soma = numero1 + numero2;
    alert(`A soma do ${numero1} com o ${numero2} é igual a ${soma}`);
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = prompt("Informe seu nome: ");
function recebeNome(nome){
    console.log(`Olá ${nome}`);
}
recebeNome(nome);//Poderia ter deixado o nome fixo ao invés de pegar da variável

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function recebeNumero(numero) {
    return numero * 2
}
let resultadoDobro = recebeNumero(4)
console.log(`O dobro do ${numero} é ${resultadoDobro}.`)

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(n1, n2, n3) {
    console.log(`A média dos números ${n1}, ${n2} e ${n3} é igual a ${(n1 + n2 +n3) / 3}`);
}
mediaNumeros(10, 20, 40);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificaNumeroMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let numeroMaior = verificaNumeroMaior(4, 1)
console.log(`O número maior é o ${numeroMaior}`)

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
  return numero * numero;
}
let resultado = quadrado(2);
console.log(resultado); 