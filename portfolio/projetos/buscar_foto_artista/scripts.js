// https://api.deezer.com/search/artist?q=anitta
async function  buscarArtista() {
    try{
        const nome = document.getElementById("NometArtista").value
        const urlApi = `https://api.deezer.com/search/artist?q=anitta`;
        const resposta = await fetch(urlApi)
        const informacoesDoUsuario = await resposta.json()
        const divContainer = document.getElementById('container')
        divContainer.innerHTML = `img src="${informacoesDoUsuario}" alt="">`;
    }
 
}