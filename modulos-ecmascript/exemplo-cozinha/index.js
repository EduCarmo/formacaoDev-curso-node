// import cozinha from './cozinha/index.js'
// import receita from './receita.js'
// import {receita} from './receita.js posso fazer dessa form exportando a função'

// const r = receita(["Feijão", "Arroz", "Carne"], cozinha.cortar, cozinha.assar)
// console.log(r)

// const r = receita(["Feijão", "Arroz", "Carne"], cozinha.cortar, cozinha.assar)
// console.log(r)   


import refeicao from "./refeicao.js";
// console.log(refeicao);
const vouComerNoAlmoco = refeicao("Almoço");
const vouComerNoJantar = refeicao("Jantar");
vouComerNoAlmoco("Feijão", "Arroz", "Carne");
vouComerNoJantar("Feijão", "Arroz", "Carne");   

