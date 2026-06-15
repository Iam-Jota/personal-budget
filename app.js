let nombres = [];
let valores = [];

// Captura imperativa (C05) — la mantenemos
function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const monto = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
    alert('Datos inválidos.');
    return;
  }

  const valor = tipo === 'ingreso' ? monto : -monto;
  nombres.push(nombre);
  valores.push(valor);
}

let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

imprimirReporte (nombres, valores) ;