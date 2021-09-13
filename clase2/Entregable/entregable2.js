//Ejercicio Entregable//
var ingresoNombre = prompt ("ingresa tu Nombre")
var ingresoApellido = prompt ("ingresa tu Apellido")

var pregunta1Beisbol = prompt("Te gusta el Beisbol:");
var pregunta2Fanatico = prompt("Eres Fanatico del Magallanes:");
var pregunta3Jugado = prompt("Haz jugado beisbol antes:");
var pregunta4Correr = prompt("Te gusta correr:");
var pregunta5Posición = prompt("Juegas 3er Base:");

var respuestasCorrectas = 0;

if (pregunta1Beisbol == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta2Fanatico == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta3Jugado == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta4Correr == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta5Posición == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}

var promedio = (respuestasCorrectas * 100) / 5;

console.log("el promedio de positividad es: " + promedio);

//Ejercicio Entregable//
var ingresoNombre = prompt ("ingresa tu Nombre")
var ingresoApellido = prompt ("ingresa tu Apellido")

var pregunta1Beisbol = prompt("Te gusta el Beisbol:");
var pregunta2Fanatico = prompt("Eres Fanatico del Magallanes:");
var pregunta3Jugado = prompt("Haz jugado beisbol antes:");
var pregunta4Correr = prompt("Te gusta correr:");
var pregunta5Posición = prompt("Juegas 3er Base:");

var respuestasCorrectas = 0;

if (pregunta1Beisbol == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta2Fanatico == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta3Jugado == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta4Correr == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if (pregunta5Posición == "si") {
  respuestasCorrectas = respuestasCorrectas + 1;
}

var promedio = (respuestasCorrectas * 100) / 5;

alert('Hola:' + ingresoNombre + ingresoApellido + 'eres' + promedio + 'Fanatico al Beisbol');