
//let nomeAmigo = document.getElementById('nome-amigo').value;
//alert(nomeAmigo)
let tabelaAmigos = [];


function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    if(nomeAmigo.value == ''){
        alert('Informar um  nome plis')
        return;
    }
    if(tabelaAmigos.includes(nomeAmigo.value)){
        alert("este nome já existe")
        return;
    }

    let listaAmigos =  document.getElementById('lista-amigos');
   
    tabelaAmigos.push(nomeAmigo.value);
   // listaAmigos.innerHTML = listaAmigos.innerHTML +  `<p id="lista-amigos">${nomeAmigo}</p>`;
    //document.getElementById('nome-amigo').value = '';
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeAmigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
};

function sortear(){
    if(tabelaAmigos.length < 4){
       alert('Adicione pelo menos 4 amigos!')
       return; 
    }

    embaralha(tabelaAmigos);
    let listaSorteio =  document.getElementById('lista-sorteio');


    for(let i = 0; i < tabelaAmigos.length; i++){

        if(i == tabelaAmigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML +  tabelaAmigos[i] + '-->' + tabelaAmigos[0] + '<br>'

        }else{
        listaSorteio.innerHTML = listaSorteio.innerHTML +  tabelaAmigos[i] + '-->' + tabelaAmigos[i + 1] + '<br>'
    }
}


};


function embaralha(lista){

    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }

}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}