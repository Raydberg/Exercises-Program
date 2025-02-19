const persona = {
  nombre: "Raydberg",
  apellido: "Smith",
  edad: 30,
  profesion: "Developer",
  saludar: function () {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  },
  obtenerEdad: function () {
    return this.edad;
  },
  obtenerProfesion: function () {
    return this.profesion;
  }
};

for (const propiedad in persona) {
  if (typeof persona[propiedad] === "function") {
    persona[propiedad]();
  } else {
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }
}