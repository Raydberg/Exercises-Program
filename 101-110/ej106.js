function obtenerIDUsuario() {
    return 50;
}

function usuarioValido() {
    return obtenerIDUsuario() > 30;
}

if (usuarioValido()) {
    console.log("USUARIO es valido")
} else {
    console.log("USUARIO no valido")
}