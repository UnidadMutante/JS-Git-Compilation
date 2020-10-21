console.log('Hola wild world');

// ➔ El método "console.info()" muestra un icono azul de información y a continuación el texto del mensaje. En algunos exploradores, se muestra simplemente como el .log().

// ➔ El método "console.error()" muestra un icono rojo de error con el mensaje coloreado en rojo.

// ➔ El método "console.warn()" muestra un icono amarillo de advertencia.

if (window.console){
    console.log("Ejemplo de mensaje o log predeterminado");
    console.error("Ejemplo de mensaje de error");
    console.warn("Ejemplo de mensaje de advertencia");
    console.info("Ejemplo de mensaje de información")
}


// ➔ console.dir(object). Imprime una representación del objeto con JavaScript.

// Por ejemplo: "console.dir(document.links);" muestra todos los enlaces en la página.
console.dir(document.links)
// ➔ console.dirxml(object). Imprime una representación en XML de de los elementos descendientes de objeto.

// ➔ console.clear(). Limpia la ventana de la consola.

console.log("%cMensaje de color verde y grande", "color: green; font-size: x-large");

console.log("%cMensaje de color rojo y chico", "color: red; font-size: x-small");

// En la consola se pueden mostrar tablas, usando método "console.table()"
console.table({ Nombre : "Lulu", Apellido : "Nameless", Alias : "yatusabes"});

//Tabla con tres columnas. Estilo Array.
var personas = [["Alejandro", "Cardenas"], ["Pedro", "Perez"], ["Juan", "Lopez"]]

console.table(personas);

// Tabla con tres columnas y encabezados. Objeto con propiedades

function Person(Nombre, Apellido) {
  this.Nombre = Nombre;
  this.Apellido = Apellido;
}
var puesto = {};
puesto.Jefe = new Person("Luli", "Nameless");
puesto.Subdirector = new Person("Pedro", "Perez");
puesto.Empleado = new Person("Juan", "Lopez");

console.table(puesto);

// Tabla con cuatro columnas y encabezados.

let sitiosweb = [
  {Nombre: "Pepito",
    Autor: "Juan Pepito",
    Enlace: "https://pepito.com"},
  {Nombre: "Otro sitio",
    Autor: "Pedro Perez",
    Enlace: "https://pedroperez.com"},
  {Nombre: "Tercer sitio",
    Autor: "Juan Lopez",
    Enlace: "https://juanlopez.com"}
];
console.table(sitiosweb);

//Aunque Javascript no nos obligue a declarar explícitamente las variables, es aconsejable declararlas antes de utilizarlas y veremos en adelante que se trata también de una buena costumbre. Además, veremos que en algunos casos especiales, no producirá exactamente los mismos resultados un script en el que hemos declarado una variable y otro en el que no lo hayamos hecho, ya que la declaración o no afecta al ámbito de las variables
//También se permite declarar varias variables en la misma línea, siempre que se separen por comas. 

//var operando1,operando2; 

//Declaración const: En realidad "const" no declara una variable sino una constante, que no puede variar su valor a lo largo de la ejecución de un programa.

//Variables locales, variables globales, impacto de declarar o no la variable con var
//También podremos declarar variables en lugares más cerrados, como por ejemplo una función. A estas variables las llamaremos locales. Cuando se declaren variables locales sólo podremos acceder a ellas dentro del lugar donde se ha declarado, es decir, si la habíamos declarado en una función solo podremos acceder a ella cuando estemos en esa función.
//Las variables pueden ser locales a una función, pero también pueden ser locales a otros ámbitos, como por ejemplo un bucle. En general, son ámbitos locales cualquier lugar acotado por llaves.
// Como hemos dicho, en Javascript tenemos libertad para declarar o no las variables con la palabra var, pero los efectos que conseguiremos en cada caso serán distintos. En concreto, cuando utilizamos var estamos haciendo que la varible que estamos declarando sea local al ámbito donde se declara. Por otro lado, si no utilizamos la palabra var para declarar una variable, ésta será global a toda la página, sea cual sea el ámbito en el que haya sido declarada.
// En el caso de una variable declarada en la página web, fuera de una función o cualquier otro ámbito más reducido, nos es indiferente si se declara o no con var, desde un punto de vista funcional. 
//Esto es debido a que cualquier variable declarada fuera de un ámbito es global a toda la página. 
// IMP //La diferencia se puede apreciar en una función por ejemplo, ya que si utilizamos var la variable será local a la función y si no lo utilizamos, 
//la variable será global a la página. 
//Esta diferencia es fundamental a la hora de controlar correctamente el uso de las variables en la página, 
//ya que si no lo hacemos en una función podríamos sobreescribir el valor de una variable, perdiendo el dato que pudiera contener previamente.
//IMP IMP IMP//

//Declaración let: Esta nueva manera de declarar las variables afecta a su ámbito, ya que son locales al bloque donde se están declarando.
// Declaración de variables con let

// Desde ECMAScript 2015 existe la declaración let. La sintaxis es la misma que var a la hora de declarar las variables, pero en el caso de let la declaración afecta al bloque.

//  Bloque significa cualquier espacio acotado por unas llaves, como podría ser las sentencias que hay dentro de las llaves de un bucle for.

//  for(let i=0; i<3; i++) {
// // en este caso, la variable i sólo existe dentro del bucle for
// alert(i);

// }

// fuera del bloque for no existe la variable i
//Si esa variable "i" hubiera sido declarada en la cabecera del bucle for mediante "var", sí que existiría fuera del bloque de código del for.

// Lista con todos los caracteres de escape

// Salto de línea: \n
// Comilla simple: \'
// Comilla doble: \"
// Tabulador: \t
// Retorno de carro: \r
// Avance de página: \f
// Retroceder espacio: \b
// Contrabarra: \\

