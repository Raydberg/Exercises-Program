const gastos = [100, 1000, 200];

const totalGastos = gastos.reduce((total, gasto) => total + gasto, 0);

console.log(`Vamos a gastar en el viaje: ${totalGastos} pesos`);