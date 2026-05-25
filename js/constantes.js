export const PI = Math.PI;
export let usuario = "Jon";

//tú en un archivo puedes exportar solo lo que necesites, si no tienes que exportar algunas variables no les agregues export

const password = "qwerty";
//export default password;
//para exportar una variable por default no se hace en la declaracion, se hace debajo de la declaracion

//funcion expresada son las que se guardan en variables
const hello = () => console.log("Hola");

// si ya exportaste algo por default, no puedes tener dos funciones, objetos, variables exportados por default, solo puedes tener una exportacion por default
//funcion definida
export default function saludar(){
  console.log("Hola Módulos +ES6")
}

export class Saludar{
  constructor(){
    console.log("Hola Clases +ES6");
  }
}

//si es una constante o una variable primero haces la asignación, luego la exportas por default y si es una funcion o una clase puedes exportar por default durante la declaracion
//si todas las variables, funciones, clases que utilizas son normales usas el import/export de estructuracion, si lo haces por default solo puedes tener uno por defecto en tus archivos y se llama de manera indeendiente antes del import