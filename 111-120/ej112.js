function mostrarNumeros(inicio, fin) {
    if (isNaN(inicio) || isNaN(fin)) {
        console.log("El tipo de número a ingresar no es válido");
        return;
    }

    inicio = Number(inicio);
    fin = Number(fin);

    if (inicio === fin) {
        console.log("Los valores ingresados son iguales");
        return;
    }

    if (inicio < fin) {
        for (let i = inicio; i <= fin; i++) {
            console.log(i);
        }
    } else {
        for (let i = inicio; i >= fin; i--) {
            console.log(i);
        }
    }
}

console.log("Inicio = 0, Fin = 1000");
mostrarNumeros(0, 1000);

console.log("Inicio = 1000, Fin = 0");
mostrarNumeros(1000, 0);

console.log("Inicio = 100, Fin = 100");
mostrarNumeros(100, 100);

console.log('Inicio = "100", Fin = 300');
mostrarNumeros("100", 300);
