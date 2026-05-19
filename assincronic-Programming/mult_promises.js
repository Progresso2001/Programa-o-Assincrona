// Usando multiplas Promises
// let fetch_1 = fetch('https://exemplo_1.com/api/dados')
// let fetch_2 = fetch('https://exemplo_2.com/api/dados')
// Promise.all([fetch_1, fetch_2])
//     .then(responses =>Promise.all(responses.map(response=> response.json())))
//     .then(data => console.log(data))
//     // .catch(error=> console.log("Erros nas requisições: ", error.message))
//     //Nota: Por padrao use se apenas um catch
//     // Tratando a mensagem de erro
//     .catch(error=>{
//         if(error.message.includes('fetch failed')){
//             console.error('Erro de conexão de rede')
//         }else{
//             console.error('Verificar a conexão')
//     }
// })

let json;
try{
    const response = await fetch('https://httpbin.org/html');
    json = await response.json()
}catch(error){
    if(error.message.typeof==='SyntaxError'){
        console.log('There was a syntexError', error)
    }else{
        console.log('There was an error:', error.message)
    }
}
if(json){
    console.log('Use the json here!', json)
}

   
