const aritmetica = {
    suma: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`Suma: ${a + b}`);
        } else {
            console.error('Both parameters must be numbers');
        }
    },
    resta: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`Resta: ${a - b}`);
        } else {
            console.error('Both parameters must be numbers');
        }
    },
    multiplicar: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`Multiplicar: ${a * b}`);
        } else {
            console.error('Both parameters must be numbers');
        }
    },
    dividir: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`Dividir: ${a / b}`);
        } else {
            console.error('Both parameters must be numbers');
        }
    },
    mostrarModulo: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`Modulo: ${a % b}`);
        } else {
            console.error('Both parameters must be numbers');
        }
    }
};

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);