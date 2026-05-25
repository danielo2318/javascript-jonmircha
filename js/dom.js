    /* Curso 61. DOM: Introducción */
    
    /* *************Curso JavaScript: 60 WEB APIs - #jonmircha *********** */
    /* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
    /* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
    /* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/* console.log(window);
console.log(document);

let texto = "Hola soy tu amigo y docente digital... Jonathan MirCha"

const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
 */
/* 
console.log("************** Elementos del Documento **************");
console.log(window.document);
//podemos acceder directamente al DOM sin necesidad de atravesar el window
console.log(document);
//gracias a las notaciones de punto es como vamos a ir accediendo a los nodos del DOM
console.log(document.head); // Devuelve solo la parte del encabezado del html

console.log(document.body); //Devuelve la parte del cuerpo
//para obtener la parte de la etiqueta HTML, pero no el mapeo del DOM completo
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);// para acceder al juego de caracteres que tiene el documento
console.log(document.title);
console.log(document.links);// te devuelve enlaces, te devuelve una colleccion de elementos HTML
//Aunque esta expresion tiene corchetes, todos estos nodos, collecciones de elementos no son arreglos y no comparten todos los metodos de los arreglos
// no dice Array dice HTML Collection que es como una especie de arreglo pero con elementos HTML
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
 console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</h2>")// Escribe en el documento y lo hace hasta abajo antes del cierre de la etiqueta body
 */


//Curso JavaScript 62: DOM Nodos, Elementos y Selectores
/*Una etiqueta HTML (para JS eso es un elemento) no es lo mismo que un nodo
por ej, los comentarios de HTML son un nodo, las etiquetas son otro tipo de nodo, etc.
para interactuar con HTML como desarrollador WEB no te va interesar tanto todo tipo de nodos
son 12 tipos de nodos, hay algunos que son en formato XML, el DOM es una API que tiene JS en los navegadores para interpretar
documentos HTML y documentos XML

por lo general a nosotros nos van a interesar los nodos de tipo elemento y los nodos de tipo texto
un nodo de tipo texto seria como un <h1>, <h2> y los nodos de tipo elemento serian como tal una etiqueta HTML en particular */

/* primero vamos a ver metodos que ya no suelen utilizarse porque han sido reemplazados
por metodos mas optimos*/
//Nos devuelve una coleccion de nodos
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
//Estos primeros 3 anteriores han sido reemplazados por 2 metodos que han sido muy populares
console.log(document.querySelector("#menu"));
//recibe como parametro un selector válido de CSS (Id, Class, etiqueta html que este dentro de una clase)
//cualquier selector váido que no sean pseudoclases o pseudoelementos, o incluso Ids aqui si se debe
//de especificar el . (para clase) o el # (para Id's)
console.log(document.querySelector("a"));
//querySelector solo te va a traer el primer selector del tipo que hayas especificado del documento html
console.log(document.querySelectorAll("a"));
//si quisiera traerme todos utilizaria el querySelectorAll
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); //usa corchetes para acceder a un elemento en especifico
console.log(document.querySelectorAll("#menu li"));//tambien acepta selectores descendientes
console.log(document.querySelector("#menu li"));// si solo quieres la primera solo usa query selector
 */
/*
//Curso JavaScript 63 DOM: Atributos y Daa-Attributes
//Tenemos 2 maneras de mandar a llamar los atributos y tambien de establecerles valores
// 1. es con la notación del punto
console.log(document.documentElement.lang);
// 2 que es incluso mejor, es utilizando el atributo llamado getAttribute
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Como establecer un nuevo valor a los atributos 
//Notación del punto
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
//Set atribute
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//guardar en variables los elementos del DOM, puedo utilizar const o let,
// es mejor guardar los elementos del DOM como const, porque const es una constante pero tambien los arreglos
// y los objetos los podemos guardar en const y podemos estar modificando cosas que tengan adentro
// pero en el caso de los arreglos y objetos, const no va a validar que algo cambie dentro del objeto
// mientras que en valores primitivos como numeros o strings no puedo cambiar el valor
// ej, si guardo en una constante "Hola" no lo puedo cambiar por "Hello"
// porque ahi ya cambio el dato, pero en los objetos y arreglos como tal no accedemos al valor, sino a una referencia 
// donde se encuentra ese valor, entonces cuando guardamos arreglos u objetos en const aqui lo que 
// valida const es que ese arreglo u objeto no cambie, siempre se mantenga siendo un objeto u arreglo

// cuando utilizamos una variable para guardar un elemento del DOM le anteponemos el signo del dollar, (opcional)

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // no hay dependencia de la ventana que estamos abriendo y la ventana origen
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data - Attributes
console.log($linkDOM.getAttribute("data-description"));
//mediante notacion del punto
//todos estos data-attributes los guarda a manera de un mapa de una collecion JS llamada dataset
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte"
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

//Curso 64 DOM: Estilos y Variables CSS

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);// te da los valores que estas usando
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM)); // te da las propiedades y los valores pordefecto
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Establecer valores

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */


//Curso 65 DOM: Clases CSS

/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
//toggle es palanca o "interruptor"
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
//reemplazar una clase por otra
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
//agregar, quitar varias classes al mismo tiempo
$card.classList.add("opacity-80", "sepia");// puedes agregar o remover mas de una clase a la vez, solo separalas por comas ,
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */


//Curso JavaScript 66 DOM: Texto y HTML
/*  const $whatIsDOM = document.getElementById("que-es");

 let text = `
 <p>
 El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
 </p>
 <p>
 Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
 </p>
 <p>
 <mark>El DOM no es parte de la especificación de JavaScript, es una API para loa navegadores.</p>
 `;

 //Como yo puedo modificar el contenido de este selector y reemplazarlo por este texto
 //Este no es parte del estandar, este es para internet explorer .innerText

 //$whatIsDOM.innerText = text; //innerText no reconoce las etiquetas HTML
 $whatIsDOM.textContent=text; //Propiedad estandar

 //si quieres que el contenido se renderice como HTML entonces en lugar de usar la propiedad
 //textContent utiliza la propiedad innerHTML

 $whatIsDOM.innerHTML = text;

 //Cuando usar innerHTML o textContent?
 $whatIsDOM.outerHTML = text;

 //outerHTML lo que hace es que mientras innerHTML reemplaza el contenido HTML del elemento DOM del cual la hemos activado
 //lo que hace outerHTML es reemplazar este elemento del DOM por el contenido que estemos ingresando
 */

 //Curso JavaScript 67. DOM Traversing: Recorriendo el DOM

 //Estos metodos son para los elementos, vamos a utilizar las propiedades que nos sirven para recorrer los elementos
 //Etiquetas HTML como tal 

 /* const $cards = document.querySelector(".cards");

 console.log($cards);
 console.log($cards.children);
 console.log($cards.children[2]);
 console.log($cards.parentElement);
 //console.log($cards.firstChild); es para nodos
 console.log($cards.firstElementChild); 
 console.log($cards.lastElementChild); 
 console.log($cards.previousElementSibling); 
 console.log($cards.nextElementSibling); 
 console.log($cards.closest("div")); //va a buscar el padre mas cercano del tipo de selector que nosotros le demos
 console.log($cards.closest("body"));
 console.log($cards.children[3].closest("section")); */
 

 //Curso JavaScript 68 DOM - Creando Elementos y Fragmentos

/*  const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
      $cards = document.querySelector(".cards");
      $figure2 = document.createElement("figure");//forma no tan correcta

$img.setAttribute("src","https://picsum.photos/200/200");   
$img.setAttribute("alt","Animals");   
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//al añadir las cosas como texto JS no los reconoce como un nodo
$figure2.innerHTML = `
 <img src="https://picsum.photos/200/200" alt="People">
 <figcaption> People </figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2); //hasta aqui es una manera de crear nodos de 1 por 1

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
     $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["Africa", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2); */

//innerHTML
/* El detalle de utilizar innerHTML (no crea nodos HTML) para visualizacion es una manera efectiva,
por cada iteracion vas a estar agregandole nuevo contenido a la propiedad innerHTML 
de esta lista numero 2, aqui hay un detalle, cuando quieras utilizar esta tecnica de inner HTML
para llenar contenido dinamico de varios elementos a la vez, lo primero que tienes que hacer es inicializar con un 
valor nulo o una cadena vacia, la propiedad innerHtml DEL ELEMENTO EN CUESTION
 */
/* $ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Recomendacion con muchos valores
//fragmentos dinámicos (son como una variable creada dinámicamente), asi solo hacemos una inserción al DOM 

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
 $ul3 = document.createElement("ul");
 $fragment = document.createDocumentFragment();

 meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
 });

 document.write("<h3>Meses del Año</h3>");
 $ul3.appendChild($fragment);
 document.body.appendChild($ul3); */


 //Curso JavaScript 69 DOM Templates HTML
 //Es literalmente como una plantilla, en el que estrucuras el contenido js

/*  const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        { title: "Tecnología", img: "https://placebeard.it/200x200" },
        { title: "Animales", img: "https://baconmockup.com/200/200" },
        { title: "Arquitectura", img: "https://picsum.photos/200/200" },
        { title: "Gente", img: "https://placebear.com/200/200" },
        { title: "Naturaleza", img: "https://picsum.photos/200/200" },
    ];
 cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //aqui clonamos el nodo, la estructura, el true en importNode significa que va a copiar toda la estructura interna
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
 });

$cards.appendChild($fragment); */

//Curso JavaScript 70 DOM: Modificando Elementos (Old Style)
/* 1. El punto (.) identifica una Clase
En el mundo de los selectores (tanto en CSS como en los métodos de JavaScript como querySelector), los símbolos tienen significados específicos:

. (punto): Significa que buscas un elemento por su atributo class.

# (almohadilla): Significa que buscas un elemento por su atributo id.

Sin símbolo: Significa que buscas una etiqueta HTML directamente (como aside, div o body).

Por lo tanto, al escribir document.querySelector(".cards"), JavaScript buscará en tu HTML algo como esto: */
/* 
const $cards = document.querySelector(".cards"),
     $newcard = document.createElement("figure"),
     $cloneCards = $cards.cloneNode(true); //con true clona todo el contenido

$newcard.innerHTML = `
<img src = "https://baconmockup.com/200/200" alt="Any">
<figcaption>Any</figcaption>
`;
$newcard.classList.add("card");

//metodo que nos permite reemplazar
//para usarlo ocupas 2 parametros, el primero el nuevo nodo y segundo el nodo a reemplazar, si lo dejamos vacio solo clona la estructura padre

//$cards.replaceChild($newcard, $cards.children[2]);

//método que nos permite insertar antes de un nodo que tomemos como referencia
//insertBefore no reemplaza al nodo solo toma ese espacio como referencia y lo inserta justo antes de dicho nodo

//$cards.insertBefore($newcard, $cards.firstElementChild)

//método para eliminar 
//$cards.removeChild($cards.lastElementChild);

//El DOM tiene un elemento que nos permite clonar 

document.body.appendChild($cloneCards);
 */






//Curso JavaScript 71 DOM: Modificando Elementos (Cool Style)

/* 
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
 beforebegin(hermano anterior)
 afterbegin(primer hijo)
 beforeend(ultimo hijo)
 afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
     $newcard = document.createElement("figure");

let $contentCard = `
<img src = "https://baconmockup.com/200/200" alt="Any">
<figcaption></figcaption>
`;
$newcard.classList.add("card");

$newcard.insertAdjacentHTML("beforeend", $contentCard);
$newcard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */
//$cards.insertAdjacentElement("afterbegin", $newcard);


//$cards.prepend($newcard);
//$cards.append($newcard);
//$cards.before($newcard);
//$cards.after($newcard);




//Curso JavaScript 72 DOM: Manejadores de Eventos

//Hay 3 maneras de definir los eventos en JS 

//cuando una funcion se convierte en un manejador de eventos(una funcion que se convierte en un evento)
//nosotros podemos acceder a un objeto especial que es el evento en sí, y a eso lo podemos acceder con la palabra reservada event
/* function holaMundo(event){   
  alert("Hola Mundo");
}

function saludar (nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
}//no se pueden añadir parametros que no sean el evento en sí, a menos que uses una
//funcion anonima o una arrow function

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo; //sin parentesis para que no se ejecute al cargar el navegador
//los semanticos solo pueden ejecutar una sola funcion
$eventoSemantico.onclick = function (e) {
    alert("Hola Munso Manejador de Eventos Semántico");
    console.log(e);
    console.log(event)
};

//el primer parametro es el tipo de evento que se espera, el segundo es la funcion (listener)
// que se ejecutara a la hora del evento
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});
  */
//$eventoMultiple.addEventListener("click", saludar); //una solucion es con una función anonima
/* $eventoMultiple.addEventListener("click", function() {
    saludar("jamon")
});  */

/* // Con la arrow funtio este metodo se simplifica aún más 
$eventoMultiple.addEventListener("click", () => {
    saludar("danielo");
    saludar();
});



//Curso JavaScript 73 DOM: Eventos con Parámetros y Removwer Eventos
//Eliminar eventos de un elemento
//si tenemos una funcion anonima o una arrow function
//el removelistener nos va a pedir el evento a remover y la funcion manejadora a ese evento
//cuando queremos remover una funcion manejadora dicha funcion
// debe estar previamente guardada, no puede ser una funcion anonima o arroeunction
const removerDobleClick = (e) => {
alert(`Removiendo el evento de tipo ${e.type}`);
 console.log(e);
 $eventoRemover.removeEventListener("dblclick", removerDobleClick);
 $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick); */




//Curso JavaScript 74 DOM Flujo de Eventos (Burbujas y Capturas)

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a"); */ //con la delegacion de eventos 
    // incluso ya no se utilizarian la declaracion de estas variables

/* function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    //e.stopPropagation()
} */

/* function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
    //e.stopPropagation()
}


//aqui ya no fue necesario añadir el stopPropagation porque el Document es el elemento padre, no hay un elemento por encima de el
document.addEventListener("click", (e) => {
    console.log("Click en", e.target);

    if(e.target.matches(".eventos-flujo div")){
       flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
       alert("Hola soy tu amigo y docente digital... Jonathan Mircha");
       e.preventDefault();
    }
}); */

//console.log($divsEventos);
/* 
$divsEventos.forEach((div) => {
    //Fase de burbuja, sin especificar o con false
    div.addEventListener("click", flujoEventos, false);  */
    //Fase de captura
    //div.addEventListener("click", flujoEventos, true); 
    //El tercer parametro de addEventListener
    //false: fase de burbuja (mas interno al mas externo), true: fase de captura (mas externo al mas interno)
    //también puedes pasar un objeto
    /* div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true,
    }) */
//});


/* $linkEventos.addEventListener("click", (e) =>{
 alert("Hola soy tu amigo y docente digital... Jonathan Mircha");
 e.preventDefault();
 e.stopPropagation();
}) */

//Curso JavaScript 75 DOM: stopPropagation & preventDefault
//Curso JavaScript 76 DOM: Delegacion de Eventos
/* 
El evento podria ser asignado a un elemento padre superior, y a partir de ahi 
simplemente buscar el selectro que coincida para ver quien es el que origino el elemento,
desencadenar la programacion que quiera al momento del evento

aqui la recomendacion es asignarlo al NODO Raiz que es el document, se genera un
listener global para el document y a partir de ahi detecta cual es el nodo que
nos interesa para que active el evento y se desencadene la programacion, asi nos 
ahorramos muchos listeners y solo detectamos el elemento que desencadene los eventos

con la delegacion de eventos tambien se detiene la propagacion
*/




//Curso JavaScript 77 BOM: Propiedades y Eventos

//el browser object model, no es mas que una serie de metodos 
// u objetos que cuelgan del objeto window

/* window.addEventListener("resize", (e) => {
    console.clear();
    console.log("***********Evento Resize***********")
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", (e) =>{
    console.clear();
    console.log("***********Evento Scroll***********")
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
   // console.clear();
    console.log("***********Evento Load***********")
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
   // console.clear();
    console.log("***********Evento DOMContentLoaded***********")
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
//es una mejor practica para cuando tengamos que hacer que algo
//se cargue en cuanto el DOM este listo, es mas eficiente trabajar con el DOMContentLoaded
// no va a esperar a que se cargue a detalle todo, para que empiece a funcionar */





// Curso JavaScript 78 BOM: Métodos
//window.alert("Alerta");
//window.confirm("Confirmación");
//window.prompt("Aviso");
/* 
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");3
//guardar varable sin informacion dentro
let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", e => {
    //window.close(); 
    ventana.close();
});
$btnImprimir.addEventListener("click", e => {
    window.print();
}); */

//Curso JavaScript 79 BOM: Objetos: URL, Historial y navegador
/* console.log("********* Objeto URL (location) ***********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname); */
//location.reload();

/* console.log("********* Objeto Historial (history) ***********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2); */

/* console.log("********* Objeto Navegador (navigator) ***********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */