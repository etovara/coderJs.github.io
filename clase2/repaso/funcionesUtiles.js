// 1.- parseInt : Convierte texto en numeros enteros.
// 2.- parseFloat: Convierte texto en numeros flotantes o decimales. 
// 3.- isNan: Retorna true solo cuando no es un numero

// Ejemplos

parseInt
var numero = parseInt ('1.6')
console.log('Convierte el texto en un numero entero:' + numero)

parseInt
var numero = parseInt ('1')
console.log('Convierte el texto en un numero entero:' + numero)

parseFloat

parseFloat
var numero = parseFloat ('1.6')
console.log('Convierte el texto en un numero entero:' + numero)

parseFloat
var numero = parseFloat ('1')
console.log('Convierte el texto en un numero entero:' + numero)

isNaN
var esUnNumero = isNaN("1"); //Enviamos texto
console.log("Esto es falso dado que es un numero:" + esUnNumero);
var esUnNumero = isNaN(1); //Enviamos un numero
console.log("Esto es falso dado que es un numero:" + esUnNumero);
var esUnNumero = isNaN("#"); //
console.log("Esto es verdadero dado que NO es un numero:" + esUnNumero); 





