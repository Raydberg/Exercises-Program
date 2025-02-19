// Ejemplo 1
// Resultado: undefined
// La variable `numero1` es declarada con `var`, lo que hace que sea "hoisted" (elevada) al inicio del contexto de ejecución, pero su inicialización no lo es. Por lo tanto, `numero1` es `undefined` en el momento del `console.log`.

console.log(numero1);
var numero1 = 10;

// Ejemplo 2
// Resultado: "Hola Mundo!"
// La función `saludar` es "hoisted" (elevada) completamente, lo que significa que se puede llamar antes de su declaración.

saludar();

function saludar() {
    console.log("Hola Mundo!");
}

// Ejemplo 3
// Resultado: ReferenceError: Cannot access 'numero2' before initialization
// La variable `numero2` es declarada con `let`, lo que significa que está en la "zona muerta temporal" (TDZ) desde el inicio del bloque hasta su inicialización. Intentar acceder a ella antes de la inicialización provoca un error de referencia.

console.log(numero2);
let numero2 = 20;

// Ejemplo 4
// Resultado: undefined, 5
// La variable `numero3` es declarada con `var` dentro de la función `prueba`, lo que hace que sea "hoisted" al inicio de la función, pero su inicialización no lo es. Por lo tanto, `numero3` es `undefined` en el primer `console.log` y `5` en el segundo.

function prueba() {
    console.log(numero3);
    var numero3 = 5;
    console.log(numero3);
}

prueba();

// Ejemplo 5
// Resultado: TypeError: saludar is not a function
// La variable `saludar` es declarada con `var`, lo que hace que sea "hoisted" al inicio del contexto de ejecución, pero su inicialización no lo es. En el momento de la llamada, `saludar` es `undefined`, lo que provoca un error de tipo cuando se intenta invocar como función.

saludar();

var saludar = function () {
    console.log("Hola Mundo!");
};

// Ejemplo 6
// Resultado: ReferenceError: Cannot access 'numero4' before initialization
// La variable `numero4` es declarada con `let` dentro de un bloque, lo que significa que está en la "zona muerta temporal" (TDZ) desde el inicio del bloque hasta su inicialización. Intentar acceder a ella antes de la inicialización provoca un error de referencia.

{
    console.log(numero4);
    let numero4 = 15;
}