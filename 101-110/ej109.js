function autenticarUsuario(usuario, password) {
    const usuariosValidos = new Map([
        ["nacho", "Nerd1979"],
        ["pedro", "Batman0217"],
        ["marta", "Madre2312"]
    ]);

    if (usuariosValidos.has(usuario) && usuariosValidos.get(usuario) === password) {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        return true;
    } else {
        console.log("Por favor ingrese credenciales válidas");
        return false;
    }
}

autenticarUsuario("nacho", "Nerd1979");
autenticarUsuario("pedro", "Batman0217");
