/**
 * La función test se ejecuta.
 * Dentro del bloque if, se declaran numero1 con let y numero2 con const.
 * Estas variables tienen un alcance de bloque, lo que significa que solo existen dentro del bloque if.
 * Al intentar acceder a numero1 y numero2 fuera del bloque if, se produce un error de referencia (ReferenceError), ya que estas variables no están definidas en ese contexto.
 * El resultado de ejecutar este código será:
 * ReferenceError: numero1 is not defined
 * ReferenceError: numero2 is not defined
 * Para evitar estos errores, las variables numero1 y numero2 deben ser declaradas fuera del bloque if si se desea acceder a ellas en el resto de la función.
 */