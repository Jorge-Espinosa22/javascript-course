const postres = [];

//Agregar un postres al final del arreglo.
postres.push("Pastel de Guayaba");
postres.push("Flan", "Gelatina");

console.log(postres);//(3) ['Pastel de Guayaba', 'Pastel de Guayaba', 'Gelatina']

//Eliminar un postre del final del arreglo.
console.log(`Elemento eliminado con pop() ${postres.pop()}`); // Gelatina
console.log(postres); // ["Pastel de Guayaba", "Flan"]

//Agregar un postre al inicio del arreglo.
postres.unshift("Tiramisu");
console.log(postres);//['Tiramisu', 'Pastel de Guayaba', 'Pastel de Guayaba']

//Eliminar un postre al inicio del arreglo.
console.log(`Elemento eliminado con pop() ${postres.shift()}`);

//Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Indice del Flan: ${postres.indexOf("Flan")}`);

// Buscar el postres "Flan" 
// Si existe mostrar "El flan existe"
// Si no existe mostrar "El flan no existe"
// Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso


const msjExistencia = postres.indexOf("Flan") === -1 ? "El flan no existe" : "El flan existe";

console.log(msjExistencia);

//===========================

const pasteles = ["Pastel de chocolate", "Pastel imposible", "Pastel de limon"]

const elminarPastel1 = (array, indice) => {
    const copyArray = array.slice()
    const pastelEliminado = copyArray.splice(indice, 1);
    console.log(copyArray);
    return pastelEliminado;

}

elminarPastel1(pasteles, 1);
console.log(pasteles);

// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.

// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []
const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const myArray5 = [5, 6]; // [5,6]
const myArray6 = new Array(5, 6); // [5,6]


const nombres = ["Juan", "Pedro", "Maria", "Ana"];
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
}
console.log("Me muestro en la consola,muchas veces?");

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
*/

//==================Iterar un arreglo y mostrar los elementos en una lista===========
const gelatinas = ["Fresa", "Limon", "Uva"];
const gelatinasLista = [];

for (let index = 0; index < gelatinas.length; index++) {
    gelatinasLista.push(`<li>${gelatinas[index]} </li>`)
}
console.log(gelatinasLista);
//['<li>Fresa </li>', '<li>Limon </li>', '<li>Uva </li>']

const refGelatinasLista = document.getElementById("gelatinas-lista")
console.log(refGelatinasLista);
refGelatinasLista.innerHTML = gelatinasLista.join("");


// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
const colores = ["Rojo", "azul", "verde", "amarillo"];
for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);

}

for (const color of colores) {
    console.log(color);
}

//================Ejercicio con for of =================
//**
// Del siguiente arreglo de cantantes, mostrar en el DOM,
// el listado como un unorder list.
// const cantantes = ["Gera mx","Junior H","Rels b","Mac Miller"] 
// Usar for of
// De preferencia usar una funcion 
// 
// */

const cantantes = ["Gera mx", "Junior H", "Rels b", "Mac Miller"]



const generarLista = (cantantesArray) => { 
    const cantantesLista = [];
    for (const cantante of cantantes) {
    cantantesLista.push(`<li>${cantante} </li>`)
}
  return cantantesLista.join("");
}

const insertarListaDom = (lista,refDom) => refDom.innerHTMl = lista;

const refListaArtistas = document.getElementById("artistas-lista")

const listItemsOfCantantes = generarLista(cantantes);
insertarListaDom( listItemsOfCantantes, refListaArtistas);


//=======Uso de break en ciclos===========
//Break detiene la ejecucion de la iteracion en curso y termina el ciclo

let iteracion = 0;

for ( ;   ; ){
    console.log(` Num de iteracion:${iteracion}`);
    iteracion++;
    if(iteracion === 5){break;

    }
}

//===================Uso de break y label en ciclos anidados========

for (let i = 1; i < 7; i++){
    for (let j = 1; j<= 10 ; j++){
        console.log(`${i} x ${j} = ${i * j}`);    
        if(i >= 4)  {
            break;
        }  
    }
}


 // ============ Ejercicio mental =============================
 let myIteration;
 for (myIteration = 0; myIteration <= 5; myIteration++) {
     console.log("For loop", myIteration ); //  0...4
     if(myIteration === 5) break;
 }
 console.log("Final", myIteration); // 5



// ======================= El scope de las variables ================

// ================ Function Scope ====================
/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
*/
function functionScope(){
    var myVar = 10; 
    let myLet = 20;
    const myConst = 30;
    console.log(myVar); //10
    console.log(myLet);//20
    console.log(myConst);//30
    
}
functionScope();
// console.log(myVar);// myVAr is not defined
// console.log(myLet);
// console.log(myConst);

// ================ Reassigment and Redeclaration========
/*
 Declarar una variable significa que se reserva el nombre 
 en memoria en el scope actual. 
 
 Inicializar una variable es establecer el valor de la variable
*/
// Pueden ser reasignadas y redeclaradas dentro del 
// mismo contexto de función.
var userName = 10;
userName = 20; // Reasignación válida
var userName = 30; // Redeclaración válida en el mismo contexto de función
// Pueden ser reasignadas dentro del mismo bloque y no pueden 
// ser redeclaradas en el mismo ámbito.
let age = 10;
age = 20; // Reasignación válida
// let age = 30; // Error: No se puede redeclarar en el mismo ámbito
// No pueden ser reasignadas después de su inicialización y tampoco 
// pueden ser redeclaradas en el mismo ámbito.
const address = 10;
// address = 20; // Error: No se puede reasignar
// const address = 30; // Error: No se puede redeclarar


// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
    var a = "a";
    let b = "b";
    const c = "c"; 
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
//console.log(c);

// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante 
  la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución
*/


/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/
console.log(phone); // undefined
var phone = "55-65-123-123";
console.log(phone); // 55-65-123-123
// 

/*
Las variables declaradas con let y const también se elevan al 
inicio de su contexto, pero a diferencia de var, no se inicializan 
automáticamente con undefined. La fase de inicialización de estas 
variables no ocurre hasta llegar a la línea de código donde se declaran.
*/

console.log( NaN === NaN);
for (let i = 0; i <= 5; i++){
    if (i!== 3) continue;{
    console.log("Estoy dentro del ciclo for");
    console.log("Valor de i", i );
    }
}

for (let i = 0; i <= 5; i++){
    if (i === 3) continue;{
    console.log("Estoy dentro del ciclo for");
    console.log("Valor de i", i );
    }
}


// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.
 Sintaxis:
    while( condición) sentencia;
    while ( condición ){
        sentencias;
    }
*/

/*while( confirm("Quieres que te genere tu num de la suerte") ){
    //random devuelve un num aleatorio entre 0(incluido) y 1(excluido)
    console.log(`Tu numero de la suerte es ${ Math.random()}`);
    // Numero aleatorio del 0 al 10 
    console.log(`Tu numero de la suerte es ${ Math.random() * 10}`);
    //Numero aleatorio del 1 al 10 (excluido)// del 1al 10.9999
    console.log(`Tu numero de la suerte es ${ (Math.random() * 10) + 1}`);
    //Numero aleatorio entero del 1 al 10(incluido)
    console.log(`Tu numero de la suerte es ${ Math.floor (Math.random() * 10) + 1}`);//Redondea hacia abajo
    console.log(`Tu numero de la suerte es ${ Math.ceil (Math.random() * 10) + 1}`);//Redondea hacia arriba
   
}
*/

// Generar 100 números aleatorios en el rango de 1 al 50(incluyendo).
// Ordenar e imprimir de manera descendente

// Función para generar un número aleatorio entre un mínimo y un máximo
 function generarNumeros() {
     return Math.floor(Math.random() * 50 ) + 1;
    }
// Crear array para ordenar numeros
 
let numerosAleatorios = [];
let i = 0;
while (  i < 100  ) {
     numerosAleatorios.push(generarNumeros());
     i++
    }
//Ordenar el array de números aleatorios
numerosAleatorios.sort((b, a) => a - b);
// Imprimir los números ordenados
console.log("Números aleatorios ordenados:", numerosAleatorios);

