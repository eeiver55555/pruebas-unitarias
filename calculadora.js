class calculadora {
  suma(a, b) {
    return a + b;
  }
  resta(a, b) {
    return a - b;
  }
  multiplicacion(a, b) {
    return a * b;
  }
  divicion(a, b) {
    return a / b;
  }
}

const calcu = new calculadora();
module.exports = { calcu };
