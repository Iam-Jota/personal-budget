let nombres = [];
let valores = [];


let numero =5;
if (numero);
console.log("El numero es: ",numero);


let continuar = 'si';

while (continuar === 'si') {
    
const nombre = prompt('Nombre del movimiento:');
const tipo = prompt('Tipo (ingreso / gasto):');
const monto = parseFloat(prompt('Monto:'));

if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
  alert('Datos inválidos. Intenta de nuevo.');
} else {
  // calcular el valor con signo
    let valor;
  if(tipo==='ingreso'){
    valor = monto;
  }
  else{
    valor = -monto;
  }

  // guardar en AMBOS arrays — siempre juntos
  nombres.push(nombre);
  valores.push(valor);

  console.log('Movimiento registrado.');
  console.log('Nombres:', nombres);
  console.log('Valores:', valores);
}
  //Coloca aqui la captura de movimientos(nombre,tipo,monto) y el bloque if-else de validacion anterior

  continuar = prompt('¿Registrar otro movimiento? (si/no):');
}

console.log('Registro completado. Total movimientos:', nombres.length);

let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];
}

console.log('Saldo total: $' + saldo.toFixed(2));

function mostrarResumen() {
  console.log('--- Resumen Final ---');
  console.log('Total de movimientos:', nombres.length);
  console.log('Saldo total: $' + calcularSaldo().toFixed(2));
}

// 2) Funciones (de P3.1-3.4)
function registrarMovimiento() { /* ... */ }
function calcularSaldo() { /* ... */ }
function mostrarResumen() { /* ... */ }

// 3) Flujo de ejecución (de P3.