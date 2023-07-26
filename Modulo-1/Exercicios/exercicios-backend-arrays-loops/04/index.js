const multDe3 = []

// for (n = 0; n < 500; n += 3) {
//     multDe3.push(n)
// }
// console.log(multDe3);
for (n = 0; n < 500; n++) {
    if ((n % 3) === 0) {
        multDe3.push(n)
    }
}
console.log(multDe3);
