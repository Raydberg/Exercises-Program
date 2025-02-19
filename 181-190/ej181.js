function crearMultiplicador(factor) {
    return function(input) {
        return input * factor;
    };
}

const doble = crearMultiplicador(2);
console.log(doble(10));

const triple = crearMultiplicador(3);
console.log(triple(4));