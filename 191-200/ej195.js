const estadoProfesor = {
  nombre: "Nicolas",
  apellido: "Isnardi",
  amigos: ["Juan, Pablo, Char"],
  leGustaJavaScript: true,
};

const estadoAlumno = {
  nombre: "Raydberg",
  apellido: "Smith",
  amigos: ["Alice", "Bob", "Charlie"],
};

const nuevoEstado = {
  ...estadoProfesor,
  ...estadoAlumno,
};

console.log(nuevoEstado);