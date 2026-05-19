// fetch('https://invalid-url.exemplo.com')
// .then(resp => resp.json)
// .catch(error=>{
//     if (error.message.includes('fetch failed')){
//         console.error('Network error or incorrect url')
//     }else{
//         console.error('other error: ', error.message)
//     }
// })

fetch('https://exemplo.typicode.com/data')
.then(resp => resp.json)
.catch(error=>{
    if (error.message.includes('fetch failed')){
        console.error('Verificar a URL path')
    }else{
        console.error('other error: ', error.message)
    }
})

// error.value==='404'