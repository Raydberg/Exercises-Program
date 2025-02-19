const usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

if (usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!') {
    console.log(usuario);
    console.log(`Username: ${usuario.username}`);
    console.log(`Password: ${usuario.password}`);
} else {
    console.error('Usuario no autenticado');
}