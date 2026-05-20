// // const { jsx } = require("react/jsx-runtime");

// // Função para autenticar e obter o token
// async function obterToken(apiurl, usuario, senha){
//     try{
//         const resposta = await fetch(`${apiurl}/login`, {
//             method:'POST',
//             headers:{
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: usuario,
//                 password: senha
//             })
//         });
//         if(!resposta.ok){
//             throw new Error(`Error na autenticação: ${resposta.status}`)
//         }
//         const dados = await resposta.json();
//         if(!dados.token){
//             throw new Error('Token não encontrado na resposta da API')
//         }
//         return dados.token // Retorna o token JWT OU Bearer
//     }catch (erro){
//         console.error('Falha ao obter o token: ', erro.message)
//     }
//     return null
// }
// obterToken('https://exemplo.typicode.com/data','joaquim', 12345)

// // Função para consumir um endpoint protegido usando o token

// async function consumirApiProtegida(apiurl, token){
//     try{
//         const res = await fetch(`${apiurl}/dados-protegidos`, {
//             method: 'GET', 
//             headers:{
//                 'Authorization': `Bearer ${token}`,
//                 'content-type': 'application/json'
//             }
//         });
//         if(!res.ok){
//             throw new Error(`Erro ao acessar a API: ${res.status}`)
//         }
//         const dados = await res.json();
//         console.log("Dados recebidos: ",dados)
//     }catch (erro){
//         console.error('Falha ao consumir a API: ', erro.message)
//     }
// }

// // consumirApiProtegida('https://exemplo.typicode.com/data', 'valordotoken' )

// // Exemplo de uso
// (async () => {
//     const API_URL = "https://exemplo.com/api";
//     const usuario = "meuUsuario";
//     const senha = "minhaSenhaSegura";

//     const token = await obterToken(API_URL, usuario, senha);

//     if (token) {
//         console.log("Token obtido:", token);
//         await consumirApiProtegida(API_URL, token);
//     }
// })();


 
    
