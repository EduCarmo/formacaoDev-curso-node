// Na refeicao X, vou comer ...
module.exports = function (refeicao) {
    const vouComer = function (...alimentos) {
        console.log(`Na refeicao ${refeicao}, vou comer ${alimentos}`)
    }

    return vouComer
}

