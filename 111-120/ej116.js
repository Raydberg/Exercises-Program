function mejorJugadorArgentino(numero) {
    switch (numero) {
        case  18 :
            return ` ${numero} - Nery Pumpido`
        case  5:
            return ` ${numero} - José Luis`
        case  9:
            return ` ${numero} - José Cuciuffo`
        case  19 :
            return ` ${numero} - Óscar Ruggeri`
        case  14:
            return ` ${numero} - Ricardo Giusti`
        case  16 :
            return ` ${numero} - Julio Olarticoechea`
        case  2:
            return ` ${numero} - Sergio Batista`
        case  12 :
            return ` ${numero} - Héctor Enrique`
        case  7:
            return ` ${numero} - Jorge Burruchaga`
        case  10:
            return ` ${numero} - Diego Armando`
        case  11:
            return ` ${numero} - Jorge Valdano`
        default :
            return `Carlos Bilardo`
    }
}

console.log(mejorJugadorArgentino(18))