const persona = {
  nombre: "Nicolas",
  saludar: function () {
    // En este contexto, `this` hace referencia al objeto `persona`.
    // Por lo tanto, `this.nombre` es "Nicolas".
    console.log(this);
    console.log(this.nombre);
  },
  saludar2: () => {
    // En este contexto, `this` no hace referencia al objeto `persona`.
    // Las arrow functions no tienen su propio `this` y heredan el `this` del contexto en el que fueron definidas.
    // En un entorno de navegador, `this` se refiere al objeto `window`.
    console.log(this);
  },
};