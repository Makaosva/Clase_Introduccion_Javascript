/*  Valores Primitivo*/

/*Numeros*/
3 + (2 * 3) / 1;
//devuelve --->16;
3 + 2 * 3 + 1;
//devuelve -->10

/* string */
//"Hola";
// "100";
// "true";
// "Hola. soy un string";

/* Booleanos */
true;
false;

typeof 12;
//devuelve --> 'number'
typeof "hola";
//devuelve un steing
typeof true;
//devuelve un boolean
typeof "12";
//devuelve un string

/* Mensaje de Consola*/
console.log("Soy un mensaje de Consola");

/* ALERTAS  */
/*alert("Soy un mensaje de alerta");
confirm("Acepta los terminos y condiciones");
prompt("Dime como te llamas");*/

/* VARIABLES */
let numero = 23;
console.log(numero, "<-- solo numero");
console.log(numero * 10, "<-- numero multiplicado por 10");

//redeclarar el valor
numero = 245;
console.log("numero modificado -->", numero);

//var string = "hola"; con var se puede volver a declarar, y no genera error
let persona = "Macarena";
console.log (persona, "<-- persona");
console.log("nombre");

//alert(persona);

/*----------------------*/

let nombre = prompt("Como te llamas?");
let edad = prompt("Dime tu edad");
console.log (nombre,"<--nombre");

/* CONCANETACION*/
console.log("Hola " + nombre);
console.log("Tengo " + edad + " años");
console.log("En 10 años vas a tener " + edad + 10 + " años");

console.log(5 + 5);
console.log("5" + "5");
console.log(5 + "5");
console.log("5 + 5");

let sumaDeAnios = Number(edad) + 10;
console.log("En 10 años vas a tener " + sumaDeAnios + " años");
//console.log(sumaDeAnios);
