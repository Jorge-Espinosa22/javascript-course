
/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */

const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("descripcion-operadores");
      console.log( descripcionOperadores );
      //descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador"//Solo texto
      //descripcionOperadores.innerHTML= "<strong> document: </strong> representa cualquier página web carga en el navegador"//Con etiquetas
      descripcionOperadores.innerHTML= `<span class="text-warning"> document: </span> representa cualquier página web carga en el navegador`//Con etiquetas

  }

  changeElementById();

 /**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
    const listItems = document.getElementsByTagName("li");
    console.log( listItems );
    for (let item of listItems){ //Para entrar a la lista y poder modificar
        item.innerText = "Mi nuevo li" 
    }
 }
 //changeElementsByTagName();

 /**
  * Acceder a un elemento usando el selector universar
  */

 const getElementByQuerySelector =() => {
        const element = document.querySelector("#descripcion-operadores");
        console.log( "Query Selector",element);
        // Seleccionar el primer paragraph que se encuentre    
        const elementParagraph = document.querySelector("p");
        console.log("El primer parrafo que encuetra",elementParagraph);
        // Seleccionar el primer elemento con la clase text-center
        const classTextCenter = document.querySelector(".text-center");
        console.log("Lo primero que encuentra", classTextCenter);
        //Primer anchor que tenga la clase text-warning
        const anchorAndTextWarning = document.querySelector("a.text-warning")
        console.log(anchorAndTextWarning);

 
 }
 getElementByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 */

const getElementsByQuerySelector =()=> {
    const listItems = document.querySelectorAll("main li")
    console.log(listItems);
}

getElementsByQuerySelector();

//=======================Ejercicio=================
//Seleccionar la imagen que se muestra de dinosaurio
//mostrar en consola el objeto

const selecionarImagen = () => {
    const imagenDino = document.querySelector("main img")
    console.log(imagenDino);
    return imagenDino;
}

selecionarImagen();

//Cambiar imagenes
const changeImage = () => {
    const refImage = selecionarImagen();
    refImage.src = "public/images/web-developer.jpg"
    refImage.alt = "Chica ninga como web developer"

}

const imagenPrincipal = selecionarImagen ();
imagenPrincipal.style.cursor="pointer";

//imagenPrincipal.addEventListener( evento , callback);
//imagenPrincipal.addEventListener( "click" , changeImage);
imagenPrincipal.addEventListener( "click" , ()=>{
    //Hacer otras cosas
    changeImage();
});

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
});


refBtnSecondary.addEventListener("click", ()=>{
    refBtnSecondary.style.visibility = "hidden";
});

//Restablecer la visualizacion de los botones primary y secondary 
//Usando el evento mouseover : Se activa cuando el puntero pasa sobre el boton
//display: block    visibility: "visible"


refBtnSuccess.addEventListener("mouseover", ()=>{
    refBtnSecondary.style.visibility = "visible";
    refBtnPrimary.style.display = "block";
});


