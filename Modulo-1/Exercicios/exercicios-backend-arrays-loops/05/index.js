const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];
for (n of original) {
    if (n % 2 === 0) {
        pares.push(n)
    }
}
console.log(pares);