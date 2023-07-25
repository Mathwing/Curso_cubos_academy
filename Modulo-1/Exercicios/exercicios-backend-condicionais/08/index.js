const idade = 27;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = true;

if (possuiPatologia || idade < 12 || altura < 150) {
    console.log("ACESSO NEGADO ");
} else if (ehEstudante || idade < 18) {
    console.log("10 reais");
} else {
    console.log("20 reais");
}
