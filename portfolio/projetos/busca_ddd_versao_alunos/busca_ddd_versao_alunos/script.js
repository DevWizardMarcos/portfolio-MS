// LINK: https://brasilapi.com.br/api/ddd/v1/${ddd}

async function buscarCidades() {
  try{
    const usuario = document.getElement('container')
    const reposta = await fetch  ('https://brasilapi.com.br/api/ddd/v1/{DDD')
    const dados =  await resposta.json()
    console.log('verificaçao de dados', dados)
}

catch{

}


}

