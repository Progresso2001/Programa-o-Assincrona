// const userData = {
//     nome:"Taro Tanaka",
//     email:"tarotanaka@gmail.com",
    
// };
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(userData)
// })
//     .then(response => response.json())
//     .then(data => console.log("Criado com sucesso: ", data))
//     .catch(error => console.error("Error: ", error))

// Enviando Dados de Formulário

// const formData = new FormData()
// formData.append('nome', 'Taro Tanaka')
// formData.append('email', 'tarotanaka@gamil.com')

// fetch('https://exemplo.com/api/submit',{
//     method: "POST",
//     body: formData
// })
//     .then(response => response.text())
//     .then(data => console.log("Criado com sucesso: ", data))
//     .catch(error => console.error("Error: ", error))

// Requisição com Autenticação
fetch('https://exemplo.com/api/protected',{
    method: "POST",
    headers: {
        'content-type': 'application/json',
       ' Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    body: JSON.stringify({ query: 'data' })
})
    .then(response => response.json())
    .then(data => console.log("Criado com sucesso: ", data))
    .catch(error => console.error("Error: ", error))

