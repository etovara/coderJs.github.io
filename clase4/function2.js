function sumaDeNumeros(num1,num2){
    let resultado = num1 + num2
    console.log(resultado);}
    
    sumaDeNumeros(3, 4)

// Convertir una funcion en función fecha, se suele usar en React y otros

function saludar() {
    console.log('Buenas Noches!');
}

var saludarV2 = () => {console.log ("Buenas Noches!")};

// Con parametros sin retorno
function saludar(pMensaje){
    console.log(pMensaje);
}

var saludarV2 = (pMensaje) => {console.log (pMensaje)};

// Con parametro y Retornando
function sumar(numero1,numero2){
    console.log()
    return numero1 + numero2;
}

var sumarV2 = (numero1,numero2) => numero1 + numero2;
// O
var sumarV2 = (pNumero1,pNumero2) => {return pNumero1 + pNumero2};


// Programa que pregunta N cantidades de veces la tabla que se desea ver hasta que no se ingresa ningun valor y se realiza el corte

var tablaIngresada = prompt("Que tabla deseas ver:");

while ('' != tablaIngresada){

    var tablaNumero = parseInt(tablaIngresada)

    for(let i = 1; i <= 10; i++){
        console.log ( i + " * " + tablaNumero + " = " + i * tablaNumero);
    }

    tablaIngresada = prompt (" Que tabla deseas ver:");
}

Aplicando funciones para mejoras al programa

const preguntar = () => prompt ("Que tabla deseas ver:")

var tablaIngresada = preguntar();

while ('' != tablaIngresada){

    var tablaNumero = parseInt(tablaIngresada)

    for(let i = 1; i <= 10; i++){
        console.log ( i + " * " + tablaNumero + " = " + i * tablaNumero);
    }

    tablaIngresada = prompt (" Que tabla deseas ver:");
}
