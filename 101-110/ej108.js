function ordenarNumeros(numero1, numero2, numero3, descendente) {
    let temp;

    if (numero1 > numero2) {
        temp = numero1;
        numero1 = numero2;
        numero2 = temp;
    }
    if(numero1>numero3){
        temp = numero1;
        numero1 = numero3;
        numero3 = temp;
    }
    if(numero2>numero3){
        temp = numero2;
        numero2 =numero3;
        numero3 = temp;
    }
    if (descendente) {
        console.log(`${numero3}, ${numero2}, ${numero1}`);
    } else {
        console.log(`${numero1}, ${numero2}, ${numero3}`);
    }
}

ordenarNumeros(40, 28, 25, false);
ordenarNumeros(10, 8, 25, true);