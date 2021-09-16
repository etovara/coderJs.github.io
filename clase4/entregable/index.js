var respuesta = prompt(
    "Ingrese el tipo de producto que desea consultar el precio Harina, Agua, Pasta, Arroz ??"
  );
  
  switch (respuesta) {
    case "Harina":
      precioHarinaSinImpuesto();
      break;
    case "Agua":
      precioAguaSinImpuesto();
      break;
    case "Pasta":
      precioPastaSinImpuesto();
      break;
    case "Arroz":
      precioArrozSinImpuesto();
    break;
    default:
      alert("No ingresaste nada!!!");
      break;
  }
  
  function precioHarinaSinImpuesto() {
    var base = ConvertirAnumeroSiEsPosible(prompt("precio base"));
    const impuesto = 0.30;
    var resultado = (base * impuesto) + base;
  
    return resultado;
  }
  
  function precioAguaSinImpuesto() {
    var base = ConvertirAnumeroSiEsPosible(prompt("precio base"));
    const impuesto = 0;
    var resultado = (base * impuesto) + base;
  
    return resultado;
  }

  function precioPastaSinImpuesto() {
    var base = ConvertirAnumeroSiEsPosible(prompt("precio base"));
    const impuesto = 0.15;
    var resultado = (base * impuesto) + base;
  
    return resultado;
  }

  function precioArrozSinImpuesto() {
    var base = ConvertirAnumeroSiEsPosible(prompt("precio base"));
    const impuesto = 0.20;
    var resultado = (base * impuesto) + base;
  
    return resultado;
  }
  
  function ConvertirAnumeroSiEsPosible(pNumero) {
    const esNumero = !isNaN(pNumero);
  
    if (esNumero) {
      return parseInt(pNumero);
    }
  
    return 0;
  }