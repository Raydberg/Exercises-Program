let numero = 0;
let suma = 0;
do {
    numero++;
    if ((numero % 2) !== 0) {
        suma += numero
    }
}
while (numero < 1000)
console.log(suma)