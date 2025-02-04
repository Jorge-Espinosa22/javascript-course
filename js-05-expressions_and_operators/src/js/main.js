/*
 En JavaScript, una expresión es cualquier fragmento de código que 
 produce un valor. Puede ser tan simple como un número o una variable, 
 o más compleja, como una operación matemática o una llamada a función.
Ejemplos:
10          // Número (expresión literal)
x           // Variable (si x está definida)
5 + 3       // Expresión aritmética (devuelve 8)
true && false // Expresión lógica (devuelve false)
"Hola".length // Expresión con propiedad (devuelve 4)
*/


// ---------------- Opéradores aritméticos ----------------
/* 
   Los operadores aritméticos toman valores numéricos 
   (ya sean literales o variables) como sus operandos 
   y devuelven un solo valor numérico.
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3// sengundo numero es la potencia.
*/

//======Precedencia de operadores ================
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(  3 * 2 / 2  ); // 3
console.log(  3 / 2 * 2  ); // 3
console.log(  2 * 4 / 2**3 ); // 1
console.log(  3 ** 2 ** 3  ); // 6561

// ---------------- Opéradores relacionales ----------------
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
  
  Un operador de comparación compara sus operandos y devuelve un valor 
  Boolean basado en si la comparación es verdadera o no.
  <  menor que
  >  mayor que
  <= menor o igual que
  >= mayor o igual que
   - Valores booleanos true y false se convierten en 1 y 0 respectivamente.
   - null se convierte a 0.
   - undefined se convierte a NaN.
*/



// ---------------- Operadores de igualdad ----------------
/*
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality
  Un operador de igualdad compara dos valores y devuelve un valor Boolean
  basado en si la comparación es verdadera o no.
  ==  igual que
  !=  diferente que
  === igual que y mismo tipo de dato
  !== diferente que y mismo tipo de dato
  - null y undefined NO son convertidos a cero
*/

console.log(  3 == 3 );  // true
console.log(  3 == "3" ); // true
console.log(  3 === "3" ); // false
console.log(  3 !== "3" ); // true
console.log(  3 != "3" );  // false

// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true

// Si ambos son objetos, devuelve true solo si ambos operandos hacen 
// referencia al mismo objeto.


const obj1 = { name: "Juan" };
const obj2 = { name: "Juan" };
const obj3 = obj1;
console.log( obj1 == obj2 ); // false
console.log( obj1 == obj3 ); // true

//--- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:-----
// Al comparar un número con una cadena, convierte la cadena en un valor numérico.
console.log(  3 == "3" ); // true
  
// Si uno de los operandos es booleano, convierte el operando booleano en 
// 1 si es verdadero y en 0 en el caso de falso.
console.log(  1 == true ); // true
console.log(  0 == false ); // true

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false
console.log( 'Hola "Ch50" ' == 'Hola "Ch50" ' ); 
console.log( "Hola \"Ch50\" " == "Hola \"Ch50\" " ); 
console.log("Primer línea, \n\tsegunda línea, \n\ttercer línea");

// Se recomienda usar el método localCompare(): compara cadenas de texto de acuerdo con las reglas de un idioma específico
console.log("apple".localeCompare("banana")); // -1 (porque "apple" < "banana")
console.log("grape".localeCompare("grape"));  // 0 (son iguales)
console.log("pear".localeCompare("orange"));  // 1 (porque "pear" > "orange")
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0
console.log( "a".localeCompare("A") ); //


// Number: devuelve verdadero solo si ambos operandos tienen el mismo valor. 
// +0 y -0 se tratan como el mismo valor. 
// Si alguno de los operandos es NaN, devuelve falso.
console.log(  +0 == -0 ); // true
console.log(  NaN == NaN ); // false
console.log(  1 == 1 ); // true
console.log(  1 == 1.0 ); // true
console.log(  1 == 1.1 ); // false
console.log(  isNaN("hola" / 3 )  ); // true

// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:
 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2
*/

let suma = 0
//Agregar 2 al valor de suma.


suma += 2 
// suma =+ "4" Convierte un string a numero.
console.log(suma)


let valorA = 15;

valorA *= 2;
console.log(valorA)

let mensaje = "Me";
mensaje += 2
console.log(mensaje)

//------------------ Operadores unarios ----------------------
//Solo actuan sobre un operando
//Negacion unaria

let numero = 3;
let dinero = -numero;// -3
console.log(numero,dinero);// 3, -3

//suma unaria(No cambia el signo del numero)
let pago = +dinero;
console.log(pago,);

//Sirve para hacer un string a number
let intereses = "5.23";// numebr
console.log( 5 + parseInt(intereses)); "55.23"


let pagoFinal = 0;
console.log(pagoFinal += 5 + +"3");
//console.log(pagoFinal += 5 + parseInt("3"));

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor
  Operador de post-incremento y post-decremento
    valor ++
    valor --
*/

let number = 10;
++ number;// numer = number +1
console.log (number);//11
number ++;
console.log (number);//11

number = 20;
console.log(number);//20
console.log(number = number +1); //21

//Uso de post incremento
number = 20;
console.log( number ++); //20 Nos entrega el valor y cuando acabe se sube
console.log(number);//21

//Uso de pre incremento
number = 40;
console.log(number = number +1)
console.log(number);

// ++valor
number = 40;
console.log(++number);
console.log(number);

//============= Ejercicio Mental ============

let x = 3;
let y = x++; // y:3   x:4
console.log(`x :${ x++ } y:${ ++y }`); // x:4    y:4
                                       // x:5
console.log(`x :${ x } y:${ y }`); // x:5     y:4

//let a = b = 0; b es declarada con var, error
let a = 0, b = 0;//Son declaradas con let

for( ; a < 3; b = a++){
  console.log(a , b);// 00, 10, 
}

console.log(a , b);


 a = 0, b = 0;//Son declaradas con let

for( ; a < 3; b = ++a){
  console.log(a , b);// 00, 1 y 1.  
}

console.log(a , b);

//==========================

const numeros = [2,4,5,54,43];
let indice = 0;
while (indice < numeros.length){
  console.log("numero:", numeros [indice++])
  //indice = indice +1
}

// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).
OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 && OP2 si OP1 es falso, se retorna la expresión de OP1.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 OP1 || OP2 Si OP2 es verdadero, se retorna la expresión de OP2.
*/

console.log(true && false);
console.log("hola" && false);
console.log(true && "Usando");
console.log("holaaaa" && "Usando");
console.log(false || undefined);
console.log(true || false);
console.log("hola" || false);
console.log(true || "Usando");
console.log("holaaaa" || "Usando");

//=================casos practicos=============
 //console.log( variableSinDeclarar); variableSinDeclarar is not defined
 console.log(true || variableSin);

 let loggedIn = true;
 loggedIn && console.log("bienvenido");

 //=============Ejercicio===========
//Mostrar en consola "Acceso permitido" solo si la variable el admin = true

let elAdmin =true;
elAdmin && console.log("Acceso permitido");

 //===============================

 let nombre= ""
 let usuario = nombre || "invitado"
 //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
 //let usuario = nombre ?? "invitado"; //Solamente funciona para null o undifined
 console.log("hola " + usuario); 

//-----------------------Ejercicio-------------------
/**
 * Imprimir en consola "Acceso Denegado" si la variable esAutorizado es +true
 * en caso contrario imprimir "Acceso concedido"
 
let esAutorizado = false
function acceso (valor){
  if (valor == true){
    console.log("Acceso concedido");
  }
    else {console.log("Acceso Denegado")};
  
}
acceso(esAutorizado);
*/

 let esAutorizado = false
 let acceso = esAutorizado ? "Acceso concedido" : "Acceso Denegado";

 console.log(acceso);
 
 let autorizado = true;
msj = autorizado && "Acceso concedido" || "Acceso denegado";
console.log(msj);

console.log( autorizado? "Acceso concedido":"Acceso denegado");



 
