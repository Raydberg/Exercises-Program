
// En un iterador, como forEach, map, filter, etc., es más común utilizar arrow functions.
// Esto se debe a que las arrow functions no tienen su propio `this` y heredan el `this` del contexto en el que fueron definidas.
// Esto puede ser útil para mantener el contexto de `this` dentro de un método de un objeto o una clase.

const numeros = [1, 2, 3, 4, 5];

// Usando una arrow function en un iterador
numeros.forEach((numero) => {
  console.log(numero);
});

// Usando una function en un iterador
numeros.forEach(function (numero) {
  console.log(numero);
});

// Ambas formas son válidas, pero las arrow functions son más concisas y mantienen el contexto de `this`.