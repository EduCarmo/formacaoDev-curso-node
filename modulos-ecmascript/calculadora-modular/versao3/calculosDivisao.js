import { resto } from "./calculosComplementares.js";

const div = (a, b) => a / b

export default function textoDivisao(a, b){
    return `A divisao de ${a} por ${b} é ${div(a, b).toFixed(2)} e o resto é ${resto(a, b)}`
}
