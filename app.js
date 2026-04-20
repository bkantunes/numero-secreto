let numeroSecreto = gerarNumeroAleatorio();

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

console.log(numeroSecreto);
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`Errou... O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p',`Errou... O número secreto é maior que ${chute}`);
        }
    }
}
