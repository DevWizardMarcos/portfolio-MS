async function carregarAnotaçoes() {
    const url = 'https://68378ebb2c55e01d184a2b6f.mockapi.io/anotacoes'

    try{

        const resposta = await fetch(url)
        const arrayAnotacoes = await resposta.json()
        console.log(arrayAnotacoes)
        const listasNotas = document.getElementById('listaNotas')
        listasNotas.innerHTML = ''
        arrayAnotacoes.forEach(anotacao => {
            listasNotas.innerHTML += `
              <div class="nota">
                <div>${anotacao.descricao}</div>
                <div class="data-nota">${anotacao.data}</div>
                <div class="acoes-nota">
                  <button class="btn-editar">Editar</button>
<button class="btn-excluir" onclick="deletarAnotacao('${anotacao.id}')">Excluir</button>                </div>
              </div>
            `
        });
        }
        catch{
            console.error(erro)
        }
}



async function cadastrarAnotacoes() {
    const url = 'https://68378ebb2c55e01d184a2b6f.mockapi.io/anotacoes' 
    
    try{
    
        const descricaoDigitada = document.getElementById('descricao').value
        const dataDigitada = document.getElementById('data').value
        if(!descricaoDigitada || !dataDigitada){
            alert('Voce precisa preencher todos os campos ')
            throw new Error('Voce precisa preencher todos os campos ')
        }
        const dadosAnotacao = {
            descricao: descricaoDigitada,
            data: dataDigitada
        }
    
        
        console.log(dadosAnotacao)
        const resposta = await fetch(url, {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify(dadosAnotacao)
        })
    
        
        alert('Dados cadastrados com sucesso ! ')
    
    }
    catch(error){
        console.error('Error em carregar anotação da api', erro)    

    }
    
    carregarAnotaçoes()
}

async function deletarAnotacao(id) {
    const url = `https://68378ebb2c55e01d184a2b6f.mockapi.io/anotacoes/${id}`
    const resposta = await fetch(url, {
        method: 'DELETE'
    })
    alert('Anotação excluída com sucesso!')
    carregarAnotaçoes()
}

carregarAnotaçoes()