let numerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Tente adivinhar o número secreto entre 1 e 10. Boa sorte!";

 function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
 }
 exibirTextoNaTela('h1','Jogo do Número Secreto');
 exibirTextoNaTela('p','Tente adivinhar o número secreto entre 1 e 10. Boa sorte!');

 function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Parabéns!');
    let tentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    exibirTextoNaTela('p', `Você acertou o número secreto em ${tentativas} ${tentativa}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto){
    exibirTextoNaTela('p', 'O número secreto é menor'); 
    } else {
    exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

  function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * 10) + 1;
    if (numerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroSecreto();
    } else {
      numerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
  }
}

  function limparCampo() {
    document.querySelector('input').value = '';    
  }

  function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Tente adivinhar o número secreto entre 1 e 10. Boa sorte!');
    document.getElementById('reiniciar').setAttribute('disabled', true);
  }