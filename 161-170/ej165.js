const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function map(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
    }
    return result;
}

const nuevaColeccion = map(numeros, function(numero) {
    return numero * 2;
});

console.log(nuevaColeccion);