
interface Animal {
  raza: string;
  muerde: boolean;
  color: ("marron" | "negro" | "blanco" | "gris")[];
}

const animales: Animal[] = [
  {
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
  },
  {
    raza: "Persa",
    muerde: false,
    color: ["marron", "blanco"],
  },
  {
    raza: "León Africano",
    muerde: true,
    color: ["marron", "negro"],
  },
];

function mostrarDatosDeLaColeccion(datos: unknown): void {
  const coleccion = datos as Animal[];
  coleccion.forEach((animal) => {
    console.log(`Raza: ${animal.raza}`);
    console.log(`Muerde: ${animal.muerde}`);
    console.log(`Colores: ${animal.color.join(", ")}`);
  });
}

mostrarDatosDeLaColeccion(animales);