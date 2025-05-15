// https:viacep.com.br/ws/31550550/json/

async function carregarCep() {
    const cepDigitado = document.getElementById('cep').value
    const urlAPI = ` https:viacep.com.br/ws/${cepDigitado}/json/`
    const resposta = await fetch(urlAPI)
    const dadosCEP = await resposta.json()
    const inputLogadouro = document.getElementById("lougadouro")
    const inputBairro= document.getElementById("bairro")
    const inputlocalidade = document.getElementById("cidade")
    const inputUF = document.getElementById("uf")


    inputLogadouro.value= dadosCEP.lograduro
    inputLogadouro.value= dadosCEP.bairro
    inputLogadouro.value= dadosCEP.localidade
    inputLogadouro.value= dadosCEP.uf
}

