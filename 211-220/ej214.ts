
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

function mostrarAutoOCamion(vehiculo: Auto | Camion): void {
  console.log(`Marca: ${vehiculo.marca}`);
  console.log(`Modelo: ${vehiculo.modelo}`);
  console.log(`Color: ${vehiculo.color}`);
  console.log(`Cantidad de pasajeros: ${vehiculo.cantidadDePasajeros}`);
  if ("esDescapotable" in vehiculo) {
    console.log(`Es descapotable: ${vehiculo.esDescapotable}`);
  } else {
    console.log(`Cantidad de acoplados: ${vehiculo.cantidadDeAcoplados}`);
  }
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

mostrarAutoOCamion(auto);
mostrarAutoOCamion(camion);