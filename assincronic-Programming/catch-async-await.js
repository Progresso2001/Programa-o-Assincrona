async function buscarUser() {
    try{
        let response = await fetch('https://sv443.net/jokeapi/posts')
        if(!response.ok){
            throw new Error('Erro na resposta da API: ', response)
        }
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log('Erro ao obter os dados: ', error.message)
    }
}
buscarUser()
async function buscarUser() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
            throw new Error('Erro na resposta da API')
        }
        let data = await response.json()
        console.log(data[0])
    }catch(error){
       if(error.message.includes('fetch failed')){
         console.log('Verificar a conexão de internet')
       }else{
         console.log('Verificar a URL')
       }
    }
}
buscarUser()
 console.log('Erro ao obter os dados: ', error.message)