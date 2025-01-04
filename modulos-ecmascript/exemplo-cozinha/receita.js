// export function receita (ingredientes, acao1, acao2) {
//     let retorno = ''
//     for (let ingrediente of ingredientes) {
//         retorno += acao1(ingrediente) + "\n"
//         retorno += acao2(ingrediente) + "\n"
//     }
//     retorno += "Acabou";
//     return retorno

//exortação de uma função para o arquivo principal
// }


export default function (ingredientes, acao1, acao2) {
    let retorno = ''
    for (let ingrediente of ingredientes) {
        retorno += acao1(ingrediente) + "\n"
        retorno += acao2(ingrediente) + "\n"
    }
    retorno += "Acabou";
    return retorno
}



