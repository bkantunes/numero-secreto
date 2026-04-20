let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function gerarNumeroAleatorio(){
    numero = parseInt(Math.random() * 100 + 1);
    return numero;
    
}

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMsgInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 100');
};

exibirMsgInicial();

    function contador(){
        tentativas++
        console.log(tentativas);
    }

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        contador();
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`Errou... O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p',`Errou... O número secreto é maior que ${chute}`);
        }
        contador();
        limparCampo();
    }
 
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 0;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};







