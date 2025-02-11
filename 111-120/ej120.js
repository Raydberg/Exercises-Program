const nombres = []
nombres[0] = "Ryan"
nombres[1] = "Lorenzo"
nombres[2] = "Pedro"
nombres[3] = "Marta"
nombres[4] = "Mathias"

const viewNumbersAndName = (nombres) => {
    nombres.forEach((nombre, index) => {
        console.log(`Indice ${index} : ${nombre}`)
    })
}
viewNumbersAndName(nombres)