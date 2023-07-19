const montante = 90000;
const capital = 60000;
const nuDeMeses = 24
let taxaDeJuros;
let porcentagemJuros;
taxaDeJuros = (montante / capital) ** (1 / nuDeMeses) - 1;
porcentagemJuros = (taxaDeJuros * 100).toFixed(3);
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${porcentagemJuros}%, pois após ${nuDeMeses} meses você teve que pagar ${montante} reais.`);
