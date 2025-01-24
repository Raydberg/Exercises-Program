let suma = 0;
let maxNumPar = 0;
for (let i = 0; i <= 1000; i++) {
    if ((suma % 2) === 0) {
        maxNumPar++;
    }
    if (maxNumPar === 10) {
        console.log(suma)
        console.log(maxNumPar)
        break;
    }
    suma += 1
}
