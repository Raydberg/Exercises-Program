const usuario = {
    username: null,
    password: null,
    saludar: function() {
        if (this.username !== null) {
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.error('Este usuario no tiene username');
        }
    },
    updateUsername: function(newUsername) {
        this.username = newUsername;
    },
    updatePassword: function(newPassword) {
        this.password = newPassword;
    }
};

usuario.updateUsername('Raydberg');
usuario.updatePassword('securePassword123');

usuario.saludar();

console.log(`Password: ${usuario.password}`);