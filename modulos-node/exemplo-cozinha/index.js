// const acoes = require('./cozinha/acoesCozinhar')
// const {alimentos} = require('./cozinha/alimentos')

// console.log(acoes.cozinhar(alimentos[0]))

// const cozinha = require('./cozinha')
// const receita = require('./receita')

// console.log(cozinha.ferver(cozinha.alimentos[0]))

// console.log(receita(cozinha.alimentos, cozinha.cortar, cozinha.assar))


const refeicao = require('./refeicao')("Almoço")
console.log(refeicao)
refeicao("arroz", "feijão", "batata")
const refeicao2 = require('./refeicao')("Jantar")
console.log(refeicao2)
refeicao2("arroz", "feijão", "batata")

