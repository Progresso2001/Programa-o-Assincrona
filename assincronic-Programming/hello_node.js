var http = require('http')
var server =http.createServer(function(request, response){
    response.writeHead(200, {"content-Type": "text/html"});
    //criando rotas
    if(request.url === '/'){
        response.write("<h1>Ola, Joaquim!</h1>")
    }else if(request.url ==='/bemvindo'){
        response.write("<h1>Seja Bem-Vindo ao Node.js</h1>")
    }else{
        response.write("<h1>Página não encontrada!</h1>")
    }
    response.end();
});
server.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})

// var http = require('htpp')

var fs = require('fs')

var server = http.createServer(function(request, response){
    fs.readFile(__dirname + '/node.html', function(err, html){
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(html);
        response.end();
    })
})
server.listen(3000, ()=>{
    console.log('Rodando')
})