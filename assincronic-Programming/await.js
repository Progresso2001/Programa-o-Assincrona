// const meuDados = {
//     nome:"Joaquim",
//     idade:29,
//     cidade: "Luanda"
// }
// async function minhaPromessa(){
//     try{
//         const resposta = await JSON.stringify(meuDados);
//         console.log(resposta)
//     }catch (erro){
//         console.error("Deu um erro ao imprimir a sms ")

//     }finally{
//         console.log('Finalizado com sucesso.')
//     }
// }
// minhaPromessa()

//async/await /fetch
async function buscarInformcoes(){
    try{
        const dados = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await dados.json()
        console.log(response)
        throw new Error("Erro encontrado")
    }catch (erro){
        console.error(erro)
    }
}
buscarInformcoes()
    .then((res) => console.log(res))
    .then((data) => console.log(data.status))
    .catch((erro) => console.log(erro))

// Inserindo dado na API -> POST METHOD
async function criarDados() {
    try{
        const novoDados = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Estudando Javascript',
                body: 'Aprender a cada dia',
                userId: 1,
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
        }); 
        const dadosJson = await novoDados.json()
        console.log(dadosJson)
        throw new Error("Verificar o erro cometido em: ")
    }catch (erro){
        console.log(erro.message)
    }
}
criarDados()
    .then((response) => console.log(response))
    .then((json) => console.log(json))
    .catch((erro) => console.log(erro))

// Inserindo apenas um dado e imprimindo apenas o dado criado 
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Python',
    body: 'Estudar Analise de Dados.',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));