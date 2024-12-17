alert('Boas vindas ao jogo do número secreto!!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log ('Valor do chute: ' + chute);
//enquanto o numero secreto não for igual ao chute
while (numeroSecreto != chute) {
    chute = prompt ('Escolha um número entre 1 a ' + numeroMaximo);
// if é a mesma coisa que se, e else é a mesma coisa que senão, else if é utilizado para mais de uma condição
// se chute for igual ao número secreto
    if (numeroSecreto == chute ) {
        break
    } else {
        if (numeroSecreto > chute) {
            alert ('O número secreto é maior que o ' + chute );
        }
        else {
            alert ('O número secreto é menor que o ' + chute );
        }
        //tentativas = tentativa + 1
        tentativas++
    }  
    }
    //Tentativas é maior que 1? então se escreve tentativas senão tentativa
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert (`Parabéns!! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
    
    //if (tentativas > 1) {
    //    alert (`Parabéns!! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    //}
    //else {
    //    alert (`Parabéns!! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
    //}
    


