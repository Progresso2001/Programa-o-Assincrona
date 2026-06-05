// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response =>{
//     if(!response.ok){
//         throw new Error("Um erro de internet ocorreu.")
//         // console.log(response)
//     }
//     return response.json()
// .then(data =>{
//         console.log(data)
//     })
// .catch(error=> console.error('Error: ', error))
// })

//Usando async / await

async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    try{
        if(!response.ok){
        throw new Error("Um erro de internet ocorreu.")
        
    }
       const data = await response.json()
       console.log(data.status)
    }catch(error){
        console.error('Error: ', error.type)
    }
}
fetchPosts()

// Adicionando parâmetros de URL
const userId = 1
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

// Obtendo e Convertendo Dados JSON
fetch('https://jsonplaceholder.typicode.com/posts/10')
.then(response =>{
    if(!response.ok){
        throw new Error("Response error: " + response.status);
    }return response.json()
    .then(data => console.log("Dados imprimidos em Json: " + JSON.stringify(data)))
    .catch(error => console.error("Error: " + error))
})

// obter dados de textos
fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
.then(response =>response.text())
.then(data =>console.log(data))
.catch(error => console.error("Error: ", error))

// Obtendo Dados Binários

fetch("https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png")
.then(response => response.blob())
.then(blob => {
    const url = URL.createObjectURL(blob);
    document.getElementById('image').src = url;
}) 
throw new Error('Erro ao carregar')
.catch(error => console.error('Error:', error));

// Exemplo: Obtendo dados binários (Blob) com Fetch API
fetch("https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png")
.then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    return response.blob(); // Converte para Blob (dados binários)
})
.then(blob => {
// Cria uma URL temporária para exibir o arquivo
    const url = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
})
.catch(error => {
    console.error("Erro ao buscar o arquivo:", error);
});






