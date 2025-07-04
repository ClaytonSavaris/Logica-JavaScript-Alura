alert("Boas Vindas ao jogo do número secreto!");
let numerolimite = 100
let numeroSecreto = parseInt(Math.random() * numerolimite + 1);
let numeroInformado;
let quantidadeTentativas = 0;

while (numeroInformado != numeroSecreto) {
    numeroInformado = prompt(`Informe um número entre 1 e ${numerolimite}: `);
    quantidadeTentativas ++;
    if(numeroSecreto == numeroInformado){
        alert(`Parabéns, você acertou o número secreto que é o ${numeroSecreto}`); //Dessa forma eu uso a concatenação por Template Strings
    }
    else {
        if (numeroSecreto > numeroInformado) {
            alert(`O número secreto é maior que o ${numeroInformado}`);
        } else {
            alert(`O número secreto é menor que o ${numeroInformado}`);
        }
    }
}

let palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você utilizou ${quantidadeTentativas} ${palavraTentativa} para acertar o Número Secreto!`);

// if (quantidadeTentativas > 1) {
//     alert(`Você utilizou ${quantidadeTentativas} tentativas para acertar o Número Secreto!`)
// } else {
//     alert(`Você utilizou ${quantidadeTentativas} tentativa para acertar o Número Secreto!`)
// }