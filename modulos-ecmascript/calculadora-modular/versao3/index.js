import {texto, soma, sub} from "./calculosBasicos.js"
import calculosComplementares from "./calculosComplementares.js"
import div from "./calculosDivisao.js"

let x, y
x = 10
y = 5

console.log(texto) 
console.log(soma(x, y))
console.log(sub(x, y))

console.log(calculosComplementares.texto)
console.log(calculosComplementares.pot(x, y))
console.log(calculosComplementares.resto(x, y))

console.log(div(x, y))