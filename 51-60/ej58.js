let hora = 23;

const resultado =
    (hora < 12 && hora > 5) ?
        "Buen dia" :
        (hora >= 10 && hora < 20) ?
            "Buenas tardes" :
            "Buenas noches";
console.log(resultado)