(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();



    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        //console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;

            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log("Este mensaje cargará de cualquier forma");
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    //xhr.open("GET", "assets/users.json");

    xhr.send();
})();


/* 
Clase 106

1. La Estructura Externa (IIFE)
El código comienza con (() => { ... })();. Esta es una Función Anónima Autoejecutable (IIFE).

¿Para qué sirve? Para que las variables declaradas dentro no "contaminen" el ámbito global, protegiendo tu código de interferencias con otros scripts.

2. Preparación de herramientas
JavaScript
const xhr = new XMLHttpRequest(),
     $xhr = document.getElementById("xhr"),
     $fragment = document.createDocumentFragment();
xhr: Es el motor. El objeto que enviará y recibirá la información.

$xhr: Una referencia a un elemento del HTML (probablemente un <ul> o <div>) donde mostraremos los datos. (El uso de $ es una convención para indicar que la variable guarda un elemento del DOM).

$fragment: Un "contenedor invisible". Es mucho más eficiente agregar elementos primero a un fragmento y luego el fragmento al DOM una sola vez, en lugar de insertar uno por uno (lo cual es lento para el navegador).

3. El Manejador de Eventos (readystatechange)
Este es el "cerebro" que escucha qué está pasando con la petición.

JavaScript
xhr.addEventListener("readystatechange", e => {
    if(xhr.readyState !== 4) return;
El evento readystatechange se dispara varias veces (cuando se abre la conexión, cuando se reciben cabeceras, etc.).

readyState !== 4: El número 4 significa "operación completada". Si no es 4, el código se detiene con el return porque la respuesta aún no llega completa.

4. Validación del Éxito (Status HTTP)
JavaScript
if(xhr.status >= 200 && xhr.status < 300){
    // ¡Todo salió bien!
} else {
    // Algo falló (Error 404, 500, etc.)
}
Los códigos de estado 200-299 indican que el servidor respondió correctamente.

5. Procesamiento de Datos (JSON)
Dentro del bloque de éxito ocurre la "magia":

JSON.parse(xhr.responseText): La respuesta llega como una simple cadena de texto. Este método la convierte en un objeto o arreglo de JavaScript manipulable.

Iteración (forEach): Se recorre cada usuario del arreglo.

Creación dinámica: Por cada usuario, se crea un elemento <li>, se le inyecta texto (name, email, phone) y se guarda en el fragmento.

Inyección final: $xhr.appendChild($fragment); pone todos los nombres en la pantalla de un solo golpe.

6. Manejo de Errores
JavaScript
let message = xhr.statusText || "Ocurrió un error";
$xhr.innerHTML = `Error ${xhr.status}: ${message}`;
Si la URL estuviera mal o el servidor caído, este bloque captura el código de error (como el famoso 404) y muestra un mensaje al usuario.

7. El Disparo de la Petición
Finalmente, nada de lo anterior se ejecuta hasta que llamamos a estos dos métodos:

JavaScript
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
open: Configura la petición. Dice: "Prepárate para traer (GET) datos de esta URL".

send: Envía la solicitud al servidor.

Resumen del flujo:
Inicias el objeto.

Configuras qué hacer cuando lleguen los datos (addEventListener).

Abres la conexión.

Envías la petición.

Esperas a que el estado sea 4.

Pintas los resultados en el HTML. */

(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    /* .then((res) => {
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);  //para convertir el readableStream a JSON, usas el metodo .json()
    }) */
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        //console.log(json);
        //$fetch.innerHTML = json;
        json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
    })
    .catch((err) => {
        //console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    //.finally(() =>
       //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch"));

})();
/* 
1. El Inicio: IIFE y Preparación
JavaScript
(() => {
    const $fetch = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment();
IIFE: La función autoejecutable protege tu código del alcance global.

$fragment: Este es un "DOM virtual" o temporal. En lugar de insertar cada <li> uno por uno en el HTML (lo cual es costoso para el rendimiento), los guardamos todos en esta "bolsa" invisible y luego insertamos la bolsa completa al final.

2. La Petición: fetch()
JavaScript
fetch("https://jsonplaceholder.typicode.com/users")
Al ejecutar esto, JavaScript lanza una petición asíncrona. Fetch devuelve una Promesa. Imagina que es un ticket que dice: "Te prometo que te traeré datos o te diré por qué no pude".

3. Primer Eslabón: Validación y Formateo
JavaScript
.then((res) => (res.ok ? res.json() : Promise.reject(res)))
Aquí ocurre algo crucial. Fetch, a diferencia de otros métodos antiguos, no falla si el servidor devuelve un error 404 (No encontrado). Para Fetch, mientras el servidor responda algo, la promesa se cumple.

res.ok: Verificamos si el status HTTP está entre 200 y 299.

res.json(): La respuesta viene en un formato llamado ReadableStream. Este método lo convierte en un objeto JavaScript que podemos leer.

Promise.reject(res): Si el status es un error (ej. 404), forzamos a la promesa a que se vaya directo al .catch().

4. Segundo Eslabón: Manipulación del DOM
JavaScript
.then((json) => {
    json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
    });
    $fetch.appendChild($fragment);
})
Una vez que los datos ya son un objeto JSON:

Iteramos con un forEach.

Creamos elementos de lista (<li>) dinámicamente.

Usamos Template Strings (las comillas invertidas `) para concatenar las propiedades del usuario de forma limpia.

Agregamos todo al $fragment.

Paso Final: Inyectamos el fragmento en el elemento $fetch del HTML.

5. Gestión de Errores y Cierre
JavaScript
.catch((err) => {
    let message = err.statusText || "Ocurrió un error";
    $fetch.innerHTML = `Error ${err.status}: ${message}`;
})
.finally(() => console.log("Esto se ejecutará independientemente..."));
.catch(): Se activa si la URL está mal, si no hay internet, o si nosotros mismos lanzamos el Promise.reject. Aquí mostramos el error visualmente al usuario.

.finally(): Es el lugar ideal para limpiar procesos, como quitar un icono de "Cargando..." (loader), ya que corre siempre, sin importar si hubo éxito o error.

¿Por qué usar Fetch en lugar de XMLHttpRequest?
Es mucho más limpio, utiliza el estándar de Promesas (lo que evita el "callback hell") y hace que el código sea más legible y fácil de mantener.

el json se convierte en una variable aqui? .then((json) => {

¡Exactamente! Has dado en el clavo.

En la línea .then((json) => {, ese json que ves entre paréntesis es el parámetro de una función flecha. Funciona como una variable local que contiene el resultado de la promesa anterior.

Aquí te explico la "cadena de custodia" de los datos para que veas cómo se transforma:

El viaje de los datos
res.json(): Este método (que está en el .then de arriba) toma el cuerpo de la respuesta que viene del servidor y lo transforma. Al terminar, "pasa la estafeta" al siguiente bloque.

El parámetro json: Cuando el segundo .then recibe esa estafeta, guarda los datos transformados en el nombre que tú elijas poner entre los paréntesis. Podrías haberle puesto data, usuarios o respuesta, y funcionaría igual.

Variable de bloque: Dentro de las llaves { ... }, la variable json ya es un objeto o arreglo de JavaScript real. Por eso puedes usar métodos como .forEach(), porque ya no es un texto plano ni un flujo de datos, sino una estructura de datos viva en la memoria.

Analogía para entenderlo mejor
Imagina que pides una pizza por teléfono (haces el fetch):

res.json(): Es el repartidor abriendo la mochila y sacando la caja.

.then((json) => {: Es el momento en que tú recibes la pizza. A partir de aquí, la pizza se llama json y ya puedes empezar a comerla (usar sus datos).

Un detalle técnico importante
Esa "variable" json solo vive dentro de ese bloque .then. Si intentas usarla fuera de la función autoejecutable o después del .finally(), el navegador te dirá que no existe. Esto es lo que conocemos como Scope (alcance) de bloque.

JavaScript
.then((json) => {
    console.log(json); // Aquí sí existe
})

console.log(json); // Error: json is not defined
*/

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
     $fragment = document.createDocumentFragment();


  async function getData(){
    try{
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

       //console.log(res, json);

       //if(!res.ok) trhow new Error("Ocurrió un Error al solicitar los Datos");
       if(!res.ok) throw {status: res.status, statusText: res.statusText}

       json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
       });

    $fetchAsync.appendChild($fragment);

    }catch(err){
        //console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

    }finally{
       //console.log("Esto se ejecutara independientemente del try... catch");
    }
  }

  getData();
})();

/* 
1. La Función Asíncrona (async/await)
Al declarar async function getData(), le dices al navegador: "Prepárate, porque esta función va a esperar procesos externos".

await: Es literalmente una pausa. En la línea de fetch, el código se detiene hasta que el servidor responde. No bloquea el navegador, solo "pausa" esta función específica.

Doble await: Necesitas dos porque el primer await espera la respuesta del servidor (cabeceras, status), y el segundo await (res.json()) espera a que todo el cuerpo de los datos se descargue y se convierta en un objeto.

2. El Bloque try...catch...finally
Es la red de seguridad del código asíncrono.

El try (El camino feliz)
Aquí pones el código que esperas que funcione. Si algo sale mal en cualquier línea dentro del try, la ejecución se detiene inmediatamente y salta al catch.

El catch (Manejo de errores)
JavaScript
if(!res.ok) throw {status: res.status, statusText: res.statusText}
Esta línea es vital. Como aprendiste con JonMircha, fetch no manda al catch los errores 404 o 500 por sí solo. Al usar throw, tú lanzas manualmente el error. El objeto que lanzas ({status...}) es el que recibe la variable err en el bloque catch.

El finally
No importa si la API respondió bien o si se cayó el internet; lo que pongas aquí se ejecutará. Es ideal para:

Ocultar iconos de carga (loaders).

Limpiar variables o cerrar conexiones.

3. Manipulación Eficiente del DOM
JavaScript
$fragment = document.createDocumentFragment();
// ...
$fragment.appendChild($li);
// ...
$fetchAsync.appendChild($fragment);
Esta es una técnica de alto rendimiento.

Si tienes 100 usuarios y los insertas uno por uno al DOM, el navegador tiene que "dibujar" la página 100 veces.

Al usar el $fragment, construyes la lista en la memoria (como un boceto) y luego la pegas al HTML una sola vez. Es mucho más rápido.
*/

(() => {
   const $axios = document.getElementById("axios"),
      $fragment = document.createDocumentFragment();

   axios
   //.get("https://jsonplaceholder.typicode.com/users")
   .get("assets/users.json")
   .then((res) => {
      //console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
       });

       $axios.appendChild($fragment);
   })
   .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
   })
   .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado Axios");
   })
})();

/* 
. Explicación Detallada del Código
La Estructura de Axios
A diferencia de fetch, Axios utiliza métodos específicos para cada verbo HTTP. Aquí usas axios.get(), lo cual es mucho más semántico que pasar un objeto de configuración.

El Objeto de Respuesta (res)
Cuando la promesa de Axios se resuelve, te devuelve un objeto de respuesta muy completo. Lo más importante aquí es que Axios empaqueta el contenido del servidor dentro de una propiedad llamada data.

JavaScript
let json = res.data; // Aquí ya tienes tu arreglo de objetos listo.

El Manejo de Errores (catch)
Axios tiene una ventaja enorme: él sí rechaza la promesa automáticamente si el status code no es 2xx. No necesitas hacer el if(!res.ok) throw... que hacías en Fetch.

err.response: Si el servidor responde con un error (como el 404 que causará tu URL /user), Axios guarda la información del error en err.response.

2. ¿Por qué Axios no necesita .json()?
Esta es la característica "mágica" de Axios. En fetch, recibir los datos es un proceso de dos pasos porque el navegador recibe primero las cabeceras y luego tiene que procesar el cuerpo (el ReadableStream).

Axios ya trae la conversión integrada.
Axios detecta automáticamente el tipo de contenido que devuelve el servidor (mirando la cabecera Content-Type). Si el servidor dice que está enviando JSON, Axios ejecuta internamente un JSON.parse() por ti antes de entregarte la respuesta.

Por eso, cuando llegas al .then(), la propiedad res.data ya no es un texto plano ni un flujo de datos, sino un objeto de JavaScript listo para usar.
*/

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
      $fragment = document.createDocumentFragment();


   async function getData(){
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
          json = await res.data;

    console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
       });

       $axiosAsync.appendChild($fragment);

    } catch (err) {
    //console.log(err.response)
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        
    }finally{
        console.log("Esto se ejecutará independientemente del try... catch ")
    }
   }

   getData();
})();

/* 
1. El Bloque async function getData()
Al definir la función como async, habilitas el uso de la palabra clave await dentro de ella. Esto transforma un proceso que normalmente es "enredado" con promesas en algo que se lee de arriba hacia abajo, como una receta de cocina.

await axios.get(...): Aquí el código se "detiene" elegantemente. No continúa a la siguiente línea hasta que Axios recibe la respuesta del servidor.

La magia de Axios: A diferencia de fetch, Axios detecta automáticamente que los datos son JSON y los convierte en un objeto de JavaScript por ti.

2. La Propiedad res.data
En tu código tienes: json = await res.data;.

Educativamente hablando: Axios empaqueta toda la respuesta del servidor en un objeto (llamado res). La información real que devuelve la API (la lista de usuarios) siempre vive dentro de la propiedad .data.

Nota técnica: Como mencionamos antes, res.data ya es el resultado final procesado, por lo que el await antes de res.data no es necesario, pero tampoco rompe el código.

3. Manejo de Errores Inteligente (try...catch)
Esta es la mayor ventaja de usar Axios con Async/Await:

Detección Automática: Si la URL estuviera mal o el servidor fallara (status 4xx o 5xx), Axios lanza un "grito" (un error) automáticamente.

Salto al Catch: Ese "grito" hace que el bloque try se detenga e inmediatamente se ejecute el bloque catch.

err.response: Axios es muy ordenado; si hay un error, te entrega un objeto llamado response que contiene exactamente qué falló (status) y el mensaje del servidor (statusText).

4. El Fragmento y la Eficiencia del DOM
JavaScript
json.forEach((el) => {
    const $li = document.createElement("li");
    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
    $fragment.appendChild($li);
});
$axiosAsync.appendChild($fragment);
Aquí estás aplicando una técnica de optimización de rendimiento:

Iteración: Recorres cada usuario del JSON.

Construcción en Memoria: Vas guardando cada <li> en el $fragment. El fragmento es como una "caja temporal" que no vive en el HTML todavía.

Inyección Única: Al final, pegas la caja completa al DOM. Esto es mucho más rápido que pegar 10 o 100 veces elementos individuales, porque el navegador solo tiene que procesar un cambio visual una sola vez.

5. El Bloque finally
Este bloque es el "limpiador". Se ejecuta siempre, pase lo que pase.

Si hubo éxito: se ejecuta.

Si hubo error: se ejecuta.

Uso común: Aquí es donde quitarías un mensaje de "Cargando..." o un spinner de la pantalla para avisar al usuario que el proceso terminó.

Resumen del flujo de trabajo:
Llamas a getData().

Esperas (await) a que Axios traiga los datos.

Procesas los datos directamente desde res.data.

Dibujas todo en un fragmento para no alentar el navegador.

Atrapas cualquier error si la API falla.

Confirmas el fin del proceso en el finally.

Es un código robusto y muy bien estructurado. Has pasado de usar el objeto nativo XMLHttpRequest a una librería moderna con la mejor sintaxis disponible. ¡Felicidade
*/