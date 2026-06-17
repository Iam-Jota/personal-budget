class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
  }

  esIngreso() {
    return this.tipo === 'ingreso';   // usa la propiedad 'tipo'
  }

  esGasto() {
    return this.tipo === 'gasto';
  }

  datosMovimiento() {
      let signo;
      
      if (this.esIngreso()) {
        signo = '+';
      } else {
        signo = '-';
      }
      
      return `${this.nombre} (${this.tipo}): ${signo}$${this.valor.toFixed(2)}`;
    }
}
class Presupuesto {
  constructor() {
    this.movimientos = [];          // propiedad: el array de movimientos
  }

  agregar(movimiento) {
    this.movimientos.push(movimiento);
  }

  eliminar(nombre) {
    this.movimientos = this.movimientos.filter(movimiento => movimiento.nombre !== nombre);
  }

  obtenerIngresos() {
    return this.movimientos.filter(movimiento => movimiento.esIngreso());
  }

  obtenerGastos() {
    return this.movimientos.filter(movimiento => movimiento.esGasto());
  }

  // Llama a obtenerIngresos() y acumula el valor directo de ese array resultante
  totalIngresos() {
    return this.obtenerIngresos()
      .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
  }

  // Llama a obtenerGastos() y acumula el valor directo de ese array resultante
  totalGastos() {
    return this.obtenerGastos()
      .reduce((acumulador, movimiento) => acumulador + movimiento.valor, 0);
  }

  saldo() {
    return this.totalIngresos() - this.totalGastos();
  }

  buscarPorNombre(texto) {
    return this.movimientos.find(movimiento =>
      movimiento.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

  resumen() {
    return {
      cantidad: this.movimientos.length,
      ingresos: this.totalIngresos(),
      gastos: this.totalGastos(),
      saldo: this.saldo()
    };
  }
}