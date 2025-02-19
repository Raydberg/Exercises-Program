const contador = (function () {
    let acumulador = 0;

    return {
        increment: function () {
            acumulador += 1;
        },
        getCount: function () {
            console.log(acumulador);
        },
        decrement: function () {
            acumulador -= 1;
        },
        reset: function () {
            acumulador = 0;
        }
    };
})();

contador.increment();
contador.getCount();
contador.increment();
contador.getCount();

contador.decrement();
contador.getCount();
contador.reset();
contador.getCount();