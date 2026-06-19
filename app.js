const form  = document.getElementById('form-mov');
const lista = document.getElementById('lista');
const presupuesto = new Presupuesto();

// Movimientos de ejemplo (antes estaban escritos a mano en el HTML)
presupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
presupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
presupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));

// Construye el <li> de un movimiento (mismo estilo que armaste en P3)
function liHTML(m) {
  // 1. Evaluamos si es ingreso
  const ingreso = m.esIngreso();
  
  // 2. Declaramos las variables usando 'let' porque vamos a asignarles un valor más adelante
  let caja;
  let texto;
  let signo;

  // 3. Estructura condicional clásica
  if (ingreso) {
    // Si es verdadero (es un ingreso)
    caja = 'bg-green-50 border-green-500';
    texto = 'text-green-700';
    signo = '+';
  } else {
    // Si es falso (es un gasto)
    caja = 'bg-red-50 border-red-500';
    texto = 'text-red-700';
    signo = '-';
  }

  // 4. Retornamos la plantilla HTML con los valores ya definidos
  return `<li class="flex items-center justify-between p-3 border-l-4 rounded ${caja}">
            <span class="text-gray-800"><span class="font-medium">${m.nombre}</span> <span class="text-xs text-gray-500">(${m.tipo})</span></span>
            <span class="font-semibold ${texto}">${signo}$${m.valor.toFixed(2)}</span>
          </li>`;
}

// Pinta la lista y el saldo desde el Presupuesto
function render() {
  
  // 1. RENDERIZADO DE LA LISTA
  // Toma el arreglo 'movimientos', transforma cada elemento en texto HTML usando 'liHTML',
  // luego los une todos en una sola cadena (sin comas) con join(''), 
  // y finalmente reemplaza el contenido interno del contenedor 'lista'.
  lista.innerHTML = presupuesto.movimientos.map(liHTML).join('');

  // 2. RENDERIZADO DEL SALDO
  // Selecciona el elemento HTML con el id 'saldo' y cambia su texto.
  // Llama al método .saldo() para calcular el total, usa .toFixed(2) para forzar 2 decimales,
  // y le concatena el símbolo del dólar al principio.
  document.getElementById('saldo').textContent = '$' + presupuesto.saldo().toFixed(2);

document.getElementById('total-ingresos').textContent = '$' + presupuesto.totalIngresos().toFixed(2);
document.getElementById('total-gastos').textContent = '$' + presupuesto.totalGastos().toFixed(2);
  
}

// Al enviar el formulario: crea el movimiento, lo agrega y re-pinta
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const tipo   = document.getElementById('tipo').value;
  const valor  = parseFloat(document.getElementById('monto').value);
  presupuesto.agregar(new Movimiento(nombre, tipo, valor));
  render();
  e.target.reset();
});

render();   // pinta los ejemplos al cargar y marca el final