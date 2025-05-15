async function buscarUsuario() {
    const usuario = document.getElementById("usuario").value;
    const urlApi = `https://api.github.com/users/${usuario}`;
    const resposta = await fetch(urlApi);
    const informacoesDoUsuario = await resposta.json();
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `<img src="${informacoesDoUsuario.avatar_url}" alt="">`;
}
