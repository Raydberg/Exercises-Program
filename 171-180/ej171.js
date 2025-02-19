/**
 * Se llama a la función mostrarValor.
 * Dentro de la función, se intenta registrar valor en la consola antes de su declaración.
 * Debido a la declaración con let, valor está en la "zona muerta temporal" (TDZ) desde el inicio de la función hasta su declaración.
 * Intentar acceder a valor antes de su declaración provoca un error de referencia (ReferenceError).
 * El resultado de ejecutar este código será:
 * ReferenceError: Cannot access 'valor' before initialization
 */