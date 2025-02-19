const mascota = {
  nombre: "Firulais",
  edad: 5,
  fechaDeNacimiento: undefined as string | undefined
};

function mostrarDatosMascota(mascota: { nombre: string; edad: number; fechaDeNacimiento?: string }): void {
  if (mascota.fechaDeNacimiento) {
    console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
  }
  console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
}

mostrarDatosMascota(mascota);

mascota.fechaDeNacimiento = "01/01/2018";

mostrarDatosMascota(mascota);