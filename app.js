
let adicionarNome = [];


let amigoEscolhido = '';

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim();
    
    if (nome == ''){
        alert('Digite um nome valido!')
    }else{
        adicionarNome.push(nome)
    }
    console.log(adicionarNome);
    limparCampo();
    atualizarLista()
}


function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';

}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
//Para cada amigo na lista 'amigos', criamos um novo item na lista da tela. forEach é um método de array que executa uma função para cada elemento do array.
    adicionarNome.forEach(function(amigo) {
// document.createElement cria um novo elemento HTML. Neste caso, estamos criando um novo elemento 'li' (item de lista).
      let li = document.createElement("li");
//textContent textContent define ou obtém o texto de um elemento. Neste caso, estamos definindo o texto do elemento 'li' como o nome do amigo.
      li.textContent = amigo;
//appendChild a appendChild adiciona um novo elemento como filho de um elemento existente. Neste caso, estamos adicionando o elemento 'li' como filho do elemento 'lista'.
      lista.appendChild(li);
      
    });
  }


function sortearAmigo(){
    amigoEscolhido = parseInt(Math.random() * adicionarNome.length );

    let nomeSorteado = adicionarNome[amigoEscolhido];

    document.getElementById('resultado').innerHTML = `O nome Sorteado foi ${nomeSorteado}!`;
   
    
    reiniciarJogo();
   
}


function reiniciarJogo(){
    adicionarNome = []; 
    visualizarNomes();
 

}