function saludar(){
    console.log('Buenas Noches!')
}

//Sin parametros
function saludar(){
    console.log('Buenas Noches!')
}

// Con parametros sin retorno
function saludar(pMensaje){
    console.log(pMensaje);
}

// Con parametro y Retornando
function sumar(numero1,numero2){
    console.log()
    return numero1 + numero2;
}

// Ejemplo 1

var tablaIngresada = prompt('Que tabla deseas ver:')
var tablaNumero = parseInt(tablaIngresada)

for(let i = 1; i <= 10; i++){
    console.log ( i + ' * ' + tablaNumero + '=' + i * tablaNumero)
}

var conformidad = prompt("Estas conforme con lo mostradp s/n");

if (conformidad === "si"){
    console.log("si lo estas");
} else {
    console.log("No lo estas");
}

////////////////////////////////////////////////////////////////////////////////////

// Ejemplo 2
// Se declara la función

function consultarTabla(){
    var tablaIngresada = prompt('Que tabla deseas ver:');
    var tablaNumero = parseInt(tablaIngresada);

    for (let i = 1; i <= 10; i++){
        console.log ( i + ' * ' + tablaNumero + '=' + i * tablaNumero);
    }
}

// Consultar la function
consultarTabla()

//////////////////////////////////////////////////////////////////////////////

// Ejemplo 3 Calculadora
var numero1 = 10 //Ingresado por el usuario
var numero2 = 522 // Ingresado por el usuario
var operador = '+'

switch(operador){
    case '+':
        console-log (numero1 + numero2)
        break;
    case '-':
        console-log (numero1 - numero2)
        break;
    case '*':
        console-log (numero1 * numero2)
        break;
    case '/':
        console-log (numero1 / numero2)
        break;
}

///////////////////////////////////////////////////////////////////////////

// Solicitando la información al usuario y aplicando una function
var numero1 = prompt ('Ingresa el numero 1:') //Ingresado por el usuario
var numero2 = prompt ('Ingresa el numero 2:') // Ingresado por  el usuario

var numero1Numerico = parseInt(numero1)
var numero2Numerico = parseInt(numero2)

var operador = '+'

switch(operador){
    case '+':
        console.log (numero1Numerico + numero2Numerico)
        break;
    case '-':
        console.log (numero1Numerico - numero2Numerico)
        break;
    case '*':
        console.log (numero1Numerico * numero2Numerico)
        break;
    case '/':
        console.log (numero1Numerico / numero2Numerico)
        break;
}

// Declarando la function
function tomarValorNumerico(pPregunta){
    var numero = prompt(pPregunta)//Valor ingresado por el usuario
    var numeroNumerico = parseInt (numero)

    return numeroNumerico;
}

tomarValorNumerico('Ingresa Sarasa')

var numero1 = tomarValorNumerico('Ingresa el numero1')
console.log(numero1)

// Se reemplaza el original y aplicando la funcion queda de esta manera 

function tomarValorNumerico(pPregunta){
    var numero = prompt(pPregunta)//Valor ingresado por el usuario
    var numeroNumerico = parseInt (numero)

    return numeroNumerico;
}

var numero1Numerico = tomarValorNumerico ('Ingresa el numero 1:') //Ingresado por el usuario
var numero2Numerico = tomarValorNumerico ('Ingresa el numero 2:') // Ingresado por  el usuario

var operador = '+'

switch(operador){
    case '+':
        console.log (numero1Numerico + numero2Numerico)
        break;
    case '-':
        console.log (numero1Numerico - numero2Numerico)
        break;
    case '*':
        console.log (numero1Numerico * numero2Numerico)
        break;
    case '/':
        console.log (numero1Numerico / numero2Numerico)
        break;
}