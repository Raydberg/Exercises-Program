interface Mascota {
  nombre: string;
  edad: number;
}
type TipoDeMascota = "perro" | "gato" | "mono";

function mostrarMascota(mascota: Mascota, tipo: TipoDeMascota): void {
  if (tipo === "perro") {
    console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
  } else if (tipo === "gato") {
    console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
  } else if (tipo === "mono") {
    console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
  }
}

const mono: Mascota = {
  nombre: "George",
  edad: 2
};

const gato: Mascota = {
  nombre: "Whiskers",
  edad: 3
};

const perro: Mascota = {
  nombre: "Buddy",
  edad: 4
};

mostrarMascota(mono, "mono");
mostrarMascota(gato, "gato");
mostrarMascota(perro, "perro");