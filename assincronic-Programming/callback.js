console.log("Estudando Programação Assincrona")

function estudar (callback){
    setTimeout (() => {
        callback('Estudar Programação');
    }, 2000)
};
estudar((resposta) => {
    console.log(resposta)
})