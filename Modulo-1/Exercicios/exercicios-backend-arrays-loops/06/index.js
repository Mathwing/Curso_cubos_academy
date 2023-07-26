const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 10];
let somaDosP = 0;

for (n of numeros) {
    if (n % 2 === 0) {
        somaDosP += n;
    }
}
console.log(somaDosP);
