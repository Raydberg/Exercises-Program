

function obtenerPerimetroRectangulo(base , altura){
    let perimetro;
    if(base === altura){
        perimetro = base*4;
        return `El perimetro es ${perimetro}`
    }
    if(base !== altura || altura !== base){
        perimetro = base*2 + altura*2;
        return `El perimetro es ${perimetro}`
    }
    return (perimetro>= 100)? "El perimetro es muy grande" : "El perimetro no es muy grande"
}


console.log(obtenerPerimetroRectangulo(2,4))

