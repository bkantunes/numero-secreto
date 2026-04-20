let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){
    numero = parseInt(Math.random() * 100 + 1);
    return numero;
    
}

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`Errou... O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p',`Errou... O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

/*
function contador(){
    let chute = document.querySelector('input').value;
    let tentativas = 1;
    if (chute){
        tentativa++
    }
    return tentativa;
}

let tentativa = contador();
console.log(tentativa);
*/




