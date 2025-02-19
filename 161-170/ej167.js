function mostrarUsuario() {
    var usuario = { nombre: 'GitHub Copilot' };
    console.log('Dentro de la función (var):', usuario);
}

mostrarUsuario();
try {
    console.log('Fuera de la función (var):', usuario);
} catch (e) {
    console.log('Error fuera de la función (var):', e.message);
}

function mostrarUsuarioLet() {
    let usuario = { nombre: 'GitHub Copilot' };
    console.log('Dentro de la función (let):', usuario);
}

mostrarUsuarioLet();
try {
    console.log('Fuera de la función (let):', usuario);
} catch (e) {
    console.log('Error fuera de la función (let):', e.message);
}

function mostrarUsuarioConst() {
    const usuario = { nombre: 'GitHub Copilot' };
    console.log('Dentro de la función (const):', usuario);
}

mostrarUsuarioConst();
try {
    console.log('Fuera de la función (const):', usuario);
} catch (e) {
    console.log('Error fuera de la función (const):', e.message);
}