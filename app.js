const miPresupuesto=new Presupuesto();


// Captura imperativa (C05) — la mantenemos
function registrarMovimiento() {
  const nombreRecibido = prompt('Nombre del movimiento:');
  const tipoRecibido = prompt('Tipo (ingreso / gasto):');
  const montoRecibido = parseFloat(prompt('Monto:'));

  if (!nombreRecibido || (tipoRecibido !== 'ingreso' && tipoRecibido !== 'gasto') || isNaN(montoRecibido) || montoRecibido <= 0) {
    alert('Datos inválidos.');
    return;
  }

const movimiento=new Movimiento(nombreRecibido,tipoRecibido,montoRecibido);
miPresupuesto.agregar (movimiento);

}
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

console.log(miPresupuesto.resumen());