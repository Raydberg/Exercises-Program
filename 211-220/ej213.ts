interface Vehiculo {
  marca: string;
  modelo: string;
  color: string;
  cantidadDePasajeros: number;
}

interface Auto extends Vehiculo {
  esDescapotable: boolean;
}

interface Camion extends Vehiculo {
  cantidadDeAcoplados: number;
}

function mostrarDatosAuto(auto: Auto): void {
  console.log(`Marca: ${auto.marca}`);
  console.log(`Modelo: ${auto.modelo}`);
  console.log(`Color: ${auto.color}`);
  console.log(`Cantidad de pasajeros: ${auto.cantidadDePasajeros}`);
  console.log(`Es descapotable: ${auto.esDescapotable}`);
}

function mostrarDatosCamion(camion: Camion): void {
  console.log(`Marca: ${camion.marca}`);
  console.log(`Modelo: ${camion.modelo}`);
  console.log(`Color: ${camion.color}`);
  console.log(`Cantidad de pasajeros: ${camion.cantidadDePasajeros}`);
  console.log(`Cantidad de acoplados: ${camion.cantidadDeAcoplados}`);
}

const auto: Auto = {
  marca: "Honda",
  modelo: "Civic",
  color: "Negro",
  cantidadDePasajeros: 5,
  esDescapotable: true,
};

const camion: Camion = {
  marca: "Volvo",
  modelo: "FH16",
  color: "Rojo",
  cantidadDePasajeros: 3,
  cantidadDeAcoplados: 2,
};

mostrarDatosAuto(auto);
mostrarDatosCamion(camion);