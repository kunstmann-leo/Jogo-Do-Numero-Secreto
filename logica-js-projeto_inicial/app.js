alert('Bem vindos ao jogo do número secreto!');
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
    tentativas++;    
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
// alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);

// }

//pra comentar varias linhas ao mesmo tempo, pressione "CTRL + ;"