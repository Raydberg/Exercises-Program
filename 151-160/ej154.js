const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio) {
        if (typeof danio === 'number' && danio > 0) {
            this.energia = Math.max(this.energia - danio, 0);
        }
    },
    recuperarEnergia: function(energiaRecuperada) {
        if (typeof energiaRecuperada === 'number' && energiaRecuperada > 0) {
            this.energia = Math.min(this.energia + energiaRecuperada, 100);
        }
    },
    perderVida: function() {
        if (this.vidas > 0) {
            this.vidas -= 1;
        }
    },
    recuperarVida: function() {
        if (this.vidas < 99) {
            this.vidas += 1;
        }
    }
};

jugador.nombre = 'Raydberg';

function mostrarEstado() {
    console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
}

jugador.perderVida();
mostrarEstado();

jugador.perderEnergia(10);
mostrarEstado();

jugador.perderEnergia(5);
mostrarEstado();

jugador.perderEnergia(15);
mostrarEstado();

jugador.perderEnergia(20);
mostrarEstado();

jugador.recuperarEnergia(10);
mostrarEstado();

jugador.perderEnergia(30);
mostrarEstado();

jugador.perderEnergia(40);
mostrarEstado();

jugador.perderVida();
mostrarEstado();

jugador.perderVida();
mostrarEstado();

jugador.recuperarVida();
mostrarEstado();

jugador.recuperarVida();
mostrarEstado();

jugador.recuperarVida();
mostrarEstado();

jugador.perderVida();
mostrarEstado();