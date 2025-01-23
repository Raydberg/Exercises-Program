let mensaje = '3.14 es un gran numero, pero mejor es 42 que le da significado a la vida'

let pi = parseFloat(mensaje.slice(0, 4))

let significadoDeVida = parseInt(mensaje.split(",")[1].trim().slice(14, 17))

let resultado = pi + significadoDeVida;

console.log(`${resultado.toString()} es el resultado de la suma de las variables pi y significado de la vida`)