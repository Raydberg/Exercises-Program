let usuario = 'pepe2017';
let password = '12345';

const resultado = (usuario === 'pepe2017' && password === '12345') ?
    "El usuario esta autenticado y puede ver el contenido del sitio" :
    "Error,no se pudo autenticar al usuario,puede intentarlo mas tarde"
console.log(resultado)