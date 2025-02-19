const usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

function autenticarUsuario(usuario) {
    return usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!';
}

if (autenticarUsuario(usuario)) {
    console.log(usuario);
    console.log(`Username: ${usuario.username}`);
    console.log(`Password: ${usuario.password}`);
} else {
    console.error('Usuario no autenticado');
}