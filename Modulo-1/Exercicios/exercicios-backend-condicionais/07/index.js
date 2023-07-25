const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFÍCIL SEM VOCE");
} else if (totalDeRendimentos > 2855970) {
    console.log("PEGA LEAO");
}