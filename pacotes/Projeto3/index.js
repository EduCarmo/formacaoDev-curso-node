import { salvar, deletar, pegarDados, persistirValores } from "./Banco.js"
import { finaliza, menu, le, textoAzul, textoVerde, menuSelecaoUsuario } from "./interface.js"

const itensMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair "];

let nome;
let id;

while (1) {
    const selecionado = await menu(itensMenu);
    switch (selecionado.trim().toLocaleLowerCase()) {
        case "adicionar":
            nome = await le("Digite o nome do usuário: ")
            salvar(nome)
            textoVerde("Feito!!!")
            break
        case "editar":
            id = await menuSelecaoUsuario(pegarDados())
            nome = await le("Nome atualizado: ")
            salvar(nome, id)
            textoVerde("Feito!!!")
            break
        case "deletar":
            id = await menuSelecaoUsuario(pegarDados())
            deletar(id)
            textoVerde("Feito!!!")
            break
        case "ver todos":
            const dados = pegarDados()
            textoAzul(dados)
            break
        case "persistir":
            persistirValores()
            textoVerde("Feito!!!")
            break
        case "sair":
            finaliza()
            textoVerde("Até mais!!!")
        default:
            console.log(`${selecionado.trim().toLocaleLowerCase()} não é válido`)
    }
    console.log(selecionado)
}

