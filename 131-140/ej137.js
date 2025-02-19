const numeros = [];

for (let i = 0; i <= 100; i++) {
    numeros.push(i);
}

const numerosIncrementados = numeros.map(num => num + 10);

for (let i = 0; i < 10; i++) {
    console.log(`Índice: ${i}, Valor original: ${numeros[i]}, Valor incrementado: ${numerosIncrementados[i]}`);
}