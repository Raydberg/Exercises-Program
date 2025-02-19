function crearPromesa(delay, tieneError = false) {
  return new Promise((onSuccess, onError) => {
    setTimeout(() => {
      if (tieneError) {
        onError(`Pasaron ${delay} segundos y la promesa no fue exitosa`);
      } else {
        onSuccess(`Pasaron ${delay} segundos y la promesa fue exitosa`);
      }
    }, delay * 1000);
  });
}

let promesa;

promesa = crearPromesa(1);
promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.log(error));

promesa = crearPromesa(5);
promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.log(error));

promesa = crearPromesa(10);
promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.log(error));

promesa = crearPromesa(3, true);
promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.log(error));