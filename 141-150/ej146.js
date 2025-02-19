const usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

function autenticarUsuario(nombreDeUsuario, clave) {
    return nombreDeUsuario === 'batman' && clave === 'Alfred1960KPO!';
}

if (autenticarUsuario(usuario.username, usuario.password)) {
    console.log(usuario);
    console.log(`Username: ${usuario.username}`);
    console.log(`Password: ${usuario.password}`);
} else {
    console.error('Usuario no autenticado');
}