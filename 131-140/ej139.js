const numeros = [];

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
}

const numerosPares = numeros.filter(num => num % 2 === 0);

const numerosImpares = numeros.filter(num => num % 2 !== 0);

console.log('Últimos 10 números pares:', numerosPares.slice(-10));

console.log('Últimos 10 números impares:', numerosImpares.slice(-10));