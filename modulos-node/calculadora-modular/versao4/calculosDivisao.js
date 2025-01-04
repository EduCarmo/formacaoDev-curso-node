const {resto} = require('./calculosComplementares')

function div(a, b) {
    return a / b
}

exports.textoDivisao = (a, b) => {
    return `A divisao de ${a} por ${b} é ${div(a, b).toFixed(2)} e o resto é ${resto(a, b)}`
}

