// // cancelamento de requisição

// const controller = new AbortController()
// const signal = controller.signal
// fetch('https://jsonplaceholder.typicode.com/posts', { signal })
// .then(response => response.json())
// .catch(error =>{
//     if(error.name === 'AbortError'){
//         console.error("The request was aborted")
//     }else{
//         console.error("Error: ", error.message)
//     }
// })
// setTimeout(()=> controller.abort(), 1000)

// Requisições com Credenciais de Autenticação
// const token = "YOUR_ACCESS_TOKEN";
// fetch('https://exemplo.com/api/protected', {
//    method: 'POST',
//    headers: {
//     'Authorization': `Bearer ${token}`,
//     'content-type': 'application/json'
//    }
// })
// .then(response => response.json())
// .then(data => console.log('Data: ', data))
// .catch(error =>console.error('Error: ', error.message))

// Suporte a CORS (Cross-Origin Resource Sharing)

fetch('https://exemplo.com/api/data', {
   method: 'GET',
   mode: 'cors'
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error =>console.error('Error: ', error.message))


