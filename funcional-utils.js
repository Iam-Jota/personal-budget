const obtenerIngresos = movimientos => movimientos.filter(movimiento => movimiento.tipo=== "ingreso");

const obtenerGastos = movimientos =>
  movimientos.filter(movimiento => movimiento.tipo === 'gasto');

const buscarPrimerGastoMayor = (movimientos, monto) =>
  obtenerGastos(movimientos).find(movimiento => movimiento.valor > monto);


const totalIngresos = movimientos =>
  obtenerIngresos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);

const totalGastos = movimientos =>
  obtenerGastos(movimientos).reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);

const calcularSaldo = movimientos =>
  totalIngresos(movimientos) - totalGastos(movimientos);

const generarValoresReporte = movimientos => [
  movimientos.length,
  totalIngresos(movimientos),
  totalGastos(movimientos),
  calcularSaldo(movimientos)
];

const imprimirReporte = movimientos => {
  console.log('--- Resumen Final ---');

  movimientos.forEach((movimiento, indice) => {
    console.log(`  ${indice + 1}. ${movimiento.nombre} (${movimiento.tipo}): $${movimiento.valor.toFixed(2)}`);
  });

  const reporte = generarValoresReporte(movimientos);
  console.log('Total movimientos:', reporte[0]);
  console.log('Total ingresos: $' + reporte[1].toFixed(2));
  console.log('Total gastos: $' + reporte[2].toFixed(2));   // ya es positivo: sin Math.abs
  console.log('Saldo: $' + reporte[3].toFixed(2));
};