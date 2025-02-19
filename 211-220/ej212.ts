
interface Mascota {
  nombre: string;
  edad: number;
  fechaDeNacimiento?: string;
}

function mostrarDatosMascota(mascota: Mascota): void {
  if (mascota.fechaDeNacimiento) {
    console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
  }
  console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
}

const mascota1: Mascota = {
  nombre: "Firulais",
  edad: 5
};

const mascota2: Mascota = {
  nombre: "Rex",
  edad: 3,
  fechaDeNacimiento: "01/01/2020"
};

mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);