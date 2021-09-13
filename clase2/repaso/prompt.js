// NOTA: prompt siempre retorna texto

// Cuando se trabaja con texto al prompt no se lo necesita transformar
var nombre = prompt ("Ingresa tu nombre");
console.log ("El nombre ingresado es:" + nombre);

//Cuando usamos el prompt y debemos trabajar con numeros
// Nos vemos forzados a usar las siguientes funciones
//parseInt: Para numeros enteros
//parseFloar: Para numeros flotantes

var edad = prompt ("Ingresa tu edad:");
console.log("La edad ingresada es :" + edad);


var mes = prompt ("Ingresa el mes en el cual naciste");
console.log('El mes ingresado es:', mes)
if (mes == 1){
    //Enero
    console.log("El mes ingresado es Enero");
}
if (mes == 2){
    //Febrero
    console.log("El mes ingresado es Febrero");
}

// Ojo cuando se aplica el triple = compara el dato con el tipo de dato.
// Cuando se aplica el doble = compara solo el dato.

var mes = prompt ("Ingresa el mes en el cual naciste");
if (mes == 1){
    //Enero
    console.log("El mes ingresado es Enero");
}
if (mes == 2){
    //Febrero
    console.log("El mes ingresado es Febrero");
}