// Variable Global
var acumulador = 2;

// if global: en el momento que se cumpla alguna condición,doodojodjodojdodjd
// se ejecutara ese if particular

if (acumulador === 2) {
    console.log("acumulador es 2");
} else if (acumulador === 3) {
    console.log ("acumualador es 3");
} else if (acumulador >= 1) {
    console.log ("acumulador es mayor o igual a 1")
}

//**********************************//
var ingresoDeUsuario = 2;
switch (ingresoDeUsuario) {
    case 1:
        console.log("el caso es 1");
        break;
    case 2:
        console.log("el caso es 2");
        break;
    default:
        console.log("No ingreso nada que podamos identificar con anterioridad");
        break;
}

//********************************///
interacciones

for(var i = 0; i < 10; i++){
    console.log ('el valor de i=' + i)
}

// Variables For

for(var i = 0; i <= 10; i+=2){
    console.log ('el valor de i=' + i)
}

for(var i = 10; i >= 0; i-=2){
    console.log ('el valor de i=' + i)
}

for(var i = 1; i <= 100; i++){
    if((i%7) === 0){
    console.log ('el valor de i=' + i)
    }
}
var acumulador = acumulador + 1


//Variable While

var  acumulador = 0

while (acumulador < 5) {
    acumulador++
    console.log (acumulador)
}

var  acumulador = 0

while(true){
    acumulador++
    console.log (acumulador)
    
    //Ignora el ciclo actual desde este punto
    if(acumulador === 1){
        continue;
    }

    // Detiene el while
    if(!(acumulador < 5)){
        break;
    }
}

//variable do while

var acumulador = 0
do{
    acumulador
}
while(false){
    acumulador++
    console.log(acumulador)
}




