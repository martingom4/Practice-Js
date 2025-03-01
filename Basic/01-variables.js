//aca vamos a saber como definir las variables y lo que tenemos que hacer


// hay varias maneras de definir variables en javascript

//var es la manera mas antigua de definir variables
//let es la manera mas nueva de definir variables
//const es la manera de definir variables que no van a cambiar

//recordar es que todo se define en lowerCamelCase (la primera palabra en minuscula y las siguientes en mayuscula)

//ejemplo de var
var helloword = "hola mundo";
console.log(helloword);
helloword = "hola mundo 2"; // esto es una mala practica ya que se puede acceder a la variable desde cualquier parte del codigo
console.log(helloword);

//ejemplo de let
let helloword2 = "hola mundo 3";
console.log(helloword2);
helloword2 = "hola mundo 4"; // esto es una buena practica ya que solo se puede acceder a la variable dentro del bloque donde se declaro
console.log(helloword2);

//ejemplo de const
const helloword3 = "hola mundo 5";
console.log(helloword3);
//helloword3 = "hola mundo 6"; // esto es una mala practica ya que no se puede cambiar el valor de la variable
//console.log(helloword3);
