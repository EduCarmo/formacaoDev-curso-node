import pensador from "pensador-scrap";
import fs from "fs";


const autor = "Jesus";
const {error, success} = await pensador.search({
    query: autor, 
    limit: 12
});

let pensamentoPraSalvar;

try {
const pensamentos = success.thought;
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
const pensamentoSelecionado = pensamentos[indiceAleatorio].content;

pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`
} catch (e) {
    pensamentoPraSalvar = `${autor} -> não tem pensamentos \n`;
} finally {
// fs.writeFileSync("frases,txt", pensamentoPraSalvar, "utf-8");
fs.appendFileSync("frases.txt", pensamentoPraSalvar, "utf-8");

const texto = fs.readFileSync("frases.txt", "utf-8");
console.log(texto)

}