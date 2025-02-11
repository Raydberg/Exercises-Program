const gustosDeHelados = [];

gustosDeHelados.push("Chocolate");
gustosDeHelados.push("Vainilla");
gustosDeHelados.push("Fresa");
gustosDeHelados.push("Menta");
gustosDeHelados.push("Dulce de leche");
gustosDeHelados.push("Café");
gustosDeHelados.push("Pistacho");
gustosDeHelados.push("Limón");
gustosDeHelados.push("Coco");
gustosDeHelados.push("Mango");

gustosDeHelados.forEach((helado) => {
    console.log(helado)
})
console.log("-------------------------------")
for (let i = gustosDeHelados.length-1; i >= 0; i--) {
    console.log(gustosDeHelados[i])
}