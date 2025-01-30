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







