function agregarGusto(gustos, nuevoGusto) {
    gustos.unshift(nuevoGusto);
    return gustos;
}

const gustosDeHelados = [];

agregarGusto(gustosDeHelados, "Chocolate");
agregarGusto(gustosDeHelados, "Vainilla");
agregarGusto(gustosDeHelados, "Fresa");
agregarGusto(gustosDeHelados, "Menta");
agregarGusto(gustosDeHelados, "Dulce de leche");
agregarGusto(gustosDeHelados, "Café");
agregarGusto(gustosDeHelados, "Pistacho");
agregarGusto(gustosDeHelados, "Limón");
agregarGusto(gustosDeHelados, "Coco");
agregarGusto(gustosDeHelados, "Mango");

console.log(gustosDeHelados);

