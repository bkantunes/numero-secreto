alert(`Boas vindas ao jogo do número secreto.`);
let secretNumber = parseInt(Math.random() * 100 + 1);
console.log(secretNumber);
let guess;
let tries = 1;
console.log(guess);

// lógica do jogo
while (guess != secretNumber){
    guess = prompt(`Escolha um número entre 1 e 100:`);
    if (guess == secretNumber){
    break;
} else if ( guess > secretNumber){
    alert(`O número secreto é menor que ${guess}.`);

} else {
    alert(`O número secreto é maior que ${guess}.`);
}
    tries++
}

let palavraTentativa = tries > 1? 'tentativas' : 'tentativa';

alert(`Você acertou o número (${secretNumber}) secreto! com ${tries} ${palavraTentativa}.`);

// if (tries > 1){
//     alert(`Você acertou o número (${secretNumber}) secreto! com ${tries} tentativas.`);
// } else {
//     alert(`Você acertou o número (${secretNumber}) secreto! com ${tries} tentativa.`);
// }
