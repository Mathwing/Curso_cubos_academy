const numeros = [54, 22, 14, 87, 10, 10, 284];
let indece = -1;
let nAencotrar = 10;
for (n = 0; n < numeros.length; n++) {
    if (numeros[n] === nAencotrar) {
        indece = n;
    }
}
console.log(indece);
