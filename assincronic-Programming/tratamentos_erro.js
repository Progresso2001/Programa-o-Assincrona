fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response =>{
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    } 
    return response.json() 
})
.catch(error => console.error("Error type: ", error.message));

// Tratamento de Timeouts
// const controller = new AbortController()
// const signal= controller.signal
// const timeout = setTimeout(()=>controller.abort, 5000)
// fetch('https://jsonplaceholder.typicode.com/posts', { signal })
// .then(response => response.json())
// .catch(error =>{
//     if(error.name === 'AbortError'){
//         console.error("Timeout: the request was aborted")
//     }else{
//         console.log("Error: ", error.message)
//     }
// })
// .finally(()=>clearTimeout(timeout))




