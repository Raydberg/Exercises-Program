let numero = 1;
//Switch
let nombreDelDia = null;
switch (numero) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes"
        break;
    case 3:
        nombreDelDia="Miercoles"
        break;
    case 4:
        nombreDelDia="Jueves"
        break;
    case 5:
        nombreDelDia = "Viernes"
        break;
    case 6 :
        nombreDelDia="Sabado";
        break;
    case 7:
        nombreDelDia="Domingo"
        break;
    default:
           nombreDelDia=null;
}
if(nombreDelDia){
    console.log(`El dia selecionado es ${nombreDelDia}`)
}else{
    console.log("Selecione por favor un numero de 1 al 7")
}
