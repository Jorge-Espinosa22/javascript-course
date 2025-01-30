/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.
*/


// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia; //Se pueden omitir las llaves si es una sola sentencia
    if ( condición ) {
        sentencias;
    }
    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa; //Se pueden omitir las llaves si es una sola sentencia
    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }
    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;

    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

let temperatura = 30;

/**
 * Funcion que recibe la temperatura y devuelve un mensaje:
 * Si la temperatura es de = 22 grados: La temperatura de 22 grados es ideal
 * Si la temperatura es de 15 a 21 grados: La temperatura de (temperatura) es fresca.
 * Si la temperatura es de menor a 15 grados:La temperatura de tem es fria
 * Si la temperatura es mayor a 22 grados: La temperatura de tem es calurosa y le gustaria a ana 
 * @param {grados} temperatura
 * @returns {string} Mensaje
 */

function temperaturaFrioCalor(grados) {
    if (grados === 22) {
        console.log("La temperatura de 22 grados es ideal")
    } else if (grados >= 15 && grados <= 21) {
        console.log(`La temperatura de ${grados} es fresca.`)
    } else if (grados < 15) {
        console.log(`La temperatura de ${grados} es fria`)
    } else {
        console.log(`La temperatura de ${grados} es calurosa y le gustaria a Nan`)
    }
}

temperaturaFrioCalor(20);
temperaturaFrioCalor(temperatura);
temperaturaFrioCalor(22);
temperaturaFrioCalor(15);
temperaturaFrioCalor(2);
temperaturaFrioCalor(-5);

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/

temperatura = 19;
switch (temperatura) {
    case 22:
        console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
        break;
    case 15:
        console.log("estoy en 15 grados");
    case 16:
        console.log("estoy en 16 grados");
    case 17:
        console.log("estoy en 17 grados");
    case 18:
        console.log("estoy en 18 grados");
    case 19:
        console.log("estoy en 19 grados");
    case 20:
        console.log("estoy en 20 grados");
    case 21:
        console.log(`La temperatura de ${temperatura}° es fresca.`);
        break;
    case 13:
    case 14:
        console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
        break;
    default:
        console.log(`La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`);
        break;
}

/**
 * Funcion que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en :
 * Vel 0:Apagado
 * Vel 1:Baja
 * Vel 2: Media
 * Vel 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param{numer}velocidad
 * @returns{string}mensaje
 */


let velocidad = 3;

switch (velocidad) {
    case 0:
        console.log (`Apagado`);
    break;
    case 1:
        console.log (`Velocidad Baja`);
    break;
    case 2:
        console.log (`Velocidad Media`);
    break;
    case 3:
        console.log (`Velocidad Alta`);
    break;
    default:
        console.log (`Valor desconocido`);
}



function calcularVelocidad(vel) {
    if (vel === 0) {
        return ("Apagado")
    } else if (vel === 1) {
        return ("Velocidad Baja")
    } else if (vel === 2) {
        return ("Velocidad Media")
    } else if (vel === 3) {
        return ("Velocidad Alta")
    }
    else {
        return ("Velocidad desconocida")
    }
}

console.log(calcularVelocidad(2));
console.log(calcularVelocidad(1));
console.log(calcularVelocidad(3));
console.log(calcularVelocidad(5));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/

const pagoTarjetaCredito = true;
let msj;

if ( pagoTarjetaCredito ){
    msj = "A realizado el pago de su TC";
}else {
    msj = "No ha realizado el pago de su TC";
}

//operador terneario
 msj = (msj) = pagoTarjetaCredito === true ?  "A realizado el pago de su TC" : "No ha realizado el pago "

console.log(msj);


console.log (pagoTarjetaCredito ? "Pagado" : "No pagado");

/**
 * Funcion que reciba la edad de una persona y devuelve el mensaje:
 * Si la edad es mayor es igual a 18: Eres mayor de Edad
 * En caso contrario:Eres menor de edad
 * @param{number}edad
 * @param{string}mensaje
 */

const evalurEdadConIfElse = (edad) => {
    if ( edad >= 18 ){
        return "Eres mayor de edad";
    }else {
        return "Eres menor de edad";
    }
}
console.log( evalurEdadConIfElse(20) ); // Eres mayor de edad

const edadPersona = (edad) => edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(edadPersona(17));
console.log(edadPersona(18));
console.log(edadPersona(16));

// ------------------- Ejercicio Estaciones del año --------------------------
/*

 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


let mes = parseInt(prompt("Ingresa el mes del 1 al 12:"));
let estacion; 
switch ( mes ){
    case 12:
    case 1:
    case 2:
        estacion = `Invierno`;
        break;
    case 3:
    case 4:
    case 5:
        estacion = `Primavera`;
        break;
    case 6:
    case 7:
    case 8:
        estacion = `Verano`;
        break;
    case 9:
    case 10:11
    case 11:
        estacion = `Otoño`;
        break;
     default:
        estacion = `Numero de mes no Valido`;
        break;
}
//document.getElementById("title").innerText = estacion;

/*let numMes = Number(prompt("¿Cuál es el número del mes?"));
let numEstacion = (numMes) => {
    if (numMes >= 3 && numMes <= 5) {
        return "Primavera ";
    } else if (numMes >= 6 && numMes <= 8) {
        return "Verano ";
    } else if (numMes >= 9 && numMes <= 11) {1
        return  "Otoño ";
    } else if (numMes === 12 || numMes === 1 || numMes === 2) {
        return  "Inviern ";
    } else {
        return "Número de mes no válido";
    }

}; 
43
document.getElementById("title").innerText = numMes;3
*/