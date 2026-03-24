//Desafios finais

//Desafio 01
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.


console.log("Seja bem vind@!");

//Desafio 02
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'BK';
console.log(`Olá, ${nome}!`);

//Desafio 03
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome1 = 'BK';
alert(`Olá, ${nome1}`);

//Desafio 04
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');

console.log(`${linguagem}`);

//Desafio 05
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 3;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//Desafio 05
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let value1 = 4;
let value2 = 3;
let result = value1 - value2;
console.log(`A diferença entre ${value1} e ${value2} é igual a ${result}`);

//Desafio 07
//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt('Insira a sua idade (números inteiros):');
if (idade > 17){
    console.log('Maior de idade.');
} else {
    console.log('Menor de idade');
}

//Desafio 08
//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Insira um número:');
if (numero > 0){
    console.log('Número positivo (+).');
} else if ( numero < 0){
    console.log('Número negativo (-).');
} else {
    console.log('Número é zero (0)');
}

//Desafio 09
//Use um loop while para imprimir os números de 1 a 10 no console.

let count = 1;

while (count < 11){
    console.log(count);
    count++
}

// Desafio 10
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// ps: esse aqui eu caprichei kkkk =) 

let nota = prompt('Insira sua nota:');
let aprovacao = nota > 7 ? 'Aprovado' : 'Reprovado';
console.log(`A sua nota é ${nota} e seu resultado final é ${aprovacao}`);

//Desafio 11
// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random() * 100 +1);
console.log(numeroAleatorio);

//Desafio 12
//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numerodeUmaDez = parseInt(Math.random() * 10 +1);
console.log(numerodeUmaDez);

//Desafio 13
// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numerodeUmaMil = parseInt(Math.random() * 1000 +1);
console.log(numerodeUmaMil);