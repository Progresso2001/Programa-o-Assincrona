// saida de logs:

fetch('https://exemplo.com/api/data')
.then(response => {
    console.log('Status code:', response.status)
})
.then(data => console.log('Data: ', data))
.catch(error => console.error('Error: ', error.message)) 