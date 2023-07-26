const letras = ["A", "a", "B", "C", "E", "e"];
let quantasL_E = 0;
let letraE = ["e", "E"];

for (letra of letras) {
    if (letra === letraE[0] || letra === letraE[1]) {
        quantasL_E++
    }
}
quantasL_E > 0 ? console.log(`Foram encontradas ${quantasL_E} letras "E" ou "e".`) : console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);