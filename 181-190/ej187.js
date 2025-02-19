let tieneError = true;

function crearPromesa() {
    return new Promise((onSuccess, onError) => {
        if (tieneError) {
            onError('Error: La promesa no se cumplió');
        } else {
            onSuccess('Éxito: La promesa se cumplió');
        }
    });
}

const promesa = crearPromesa();

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });