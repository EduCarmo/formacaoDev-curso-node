export default function (refeicao) {
    const vouComer = function (...alimentos) {
        console.log(`Na refeicao ${refeicao}, vou comer ${alimentos}`)
    }

    return vouComer
}
