var n1 = prompt ("Ingrese el primer valor Numerico")
var n2 = prompt ("ingrese el segundo valor Numerico")

class operacionesMatematicas{
    constructor() {}
  
    suma(n1, n2) {
      return n1 + n2;
    }
    resta(n1, n2) {
      return n1 - n2;
    }
    mult(n1, n2) {
      return n1 * n2;
    }
    div(n1, n2) {
      return n1 / n2;
    }
  }
  var calculadora = new operacionesMatematicas();
  console.log(calculadora.suma(n1,n2));
  console.log(calculadora.resta(n1,n2));
  console.log(calculadora.mult(n1,n2));
  console.log(calculadora.div(n1,n2));