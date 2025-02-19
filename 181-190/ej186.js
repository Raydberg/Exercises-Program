function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        onSuccess(mensaje);
    });
}

const promesa = crearPromesa('La promesa fue exitosa');

promesa.then((mensaje) => {
    console.log(mensaje);
});