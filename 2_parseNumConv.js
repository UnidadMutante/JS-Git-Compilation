//Funciones parseInt(), parseFloat(), Number() y conversión implícita
//parseInt() y parseFloat() son funciones creadas para analizar un string y devolver un número si es posible. Los espacios iniciales y finales se ignoran.
//para extraer un numero de un string
parseInt("10"); // 10
parseInt("10.8"); // 10
parseInt("10 22"); // 10
parseInt(" 14 "); // 14
parseInt("20 dias"); // 20
parseInt("Hace 20 dias"); // NaN
parseInt("44aa33bb"); // 44
parseInt("3.14"); // 3
parseInt("314e-2"); // 314
parseInt(""); // NaN -> ¡¡el string vacio se convierte a NaN!!
parseInt(null); // NaN
parseInt("10",10); // 10
parseInt("010"); // 10 ¡¡ * 8 en navegadores antiguos * !!
parseInt("10",8); // 8
parseInt("0x10"); // 16 0x indica que el número es hexadecimal
parseInt("10",16); //16

//parseFloat(string) - Conversión de string a número en coma flotante

parseFloat("3.14"); // 3.14
parseFloat("314e-2"); // 3.14
parseFloat("0.0314E+2"); // 3.14
parseFloat("3.14dieciseis"); // 3.14
parseFloat("A3.14"); // NaN
parseFloat("tres"); // NaN
parseFloat("e-2"); // NaN
parseFloat("0x10"); // 0 -> No admite el prefijo 0x para indicar 'hexadecimal'
parseFloat(""); // NaN -> ¡¡el string vacio se convierte a NaN!!
parseFloat(null); // NaN

//Number() es un constructor para crear objetos de tipo Number, 
//pero cuando se utiliza sin el new funciona como un conversor a tipo númerico.

//como constructor: 
var myNumber = new Number(14);

//como método: 
var myNumber2 = Number("14");

//El segundo uso, sin new, es el que nos interesa para este tema.
//Puede utilizarse para números enteros o decimales y acepta también la notación exponencial.

Number("12"); // 12
Number("3.14"); // 3.14
Number("314e-2"); // 3.14
Number("0.0314E+2"); // 3.14
Number("e-2"); // NaN
Number('0x10'); // 16 admite el prefijo 0x para indicar 'hexadecimal'
 
//Ignora los espacios al principio y al final, pero, diferencia de los métodos anteriores, 
//cuando un string contiene caracteres no convertibles a números el resultado siempre es NaN, 
//no trata de 'extraer' la parte numérica.

Number(" 12 "); // 12
Number("20 dias"); // NaN
Number("Hace 20 dias"); // NaN
Number("44aa33bb"); // NaN
Number(""); // 0 -> ¡¡el string vacio se convierte a 0!!
Number(" "); // 0
Number(null); // 0
 
//Con Number() podemos convertir booleans en números, false siempre se convierte en 0 y true en 1.

Number(true); // 1
Number(false); // 0
 
//también podemos incluir una expresión con resultado boolean

Number( (1<2) ); // 1
Number( (1===2) ); // 0
 
//Conversión implicita '+'
//La conversión implícita es una forma de conversión rápida a número. 
//Podemos utilizar cualquier operación que fuerce al intérprete a realizar una conversión implícita de tipos 
//pero que no varíe el operando:

var myNumberValue = "8" - 0; // number 8
var myNumberValue = "8" * 1; // number 8
var myNumberValue = "8" / 1; // number 8
var myNumberValue = +"8"; // number 8
 
//La forma más utilizada por su simplicidad es +var. 
//El operador unitario + no cambia el valor de var pero lo convierte a número. 
//No confundir con ++var que sí cambia el valor, sumándole uno.
//Este tipo de conversión, igual que Number(), devuelve NaN si el string contiene caracteres no numéricos.
//esta forma de conversión es equivalente a Number() y devuelve los mismos resultados:

+"12"; // 12
+"3.14"; // 3.14
+"314e-2"; // 3.14
+"0.0314E+2"; // 3.14
+"e-2"; // NaN
+"0x10"; // 16 admite el prefijo 0x para indicar 'hexadecimal'
+" 12 "; // 12
+"20 dias"; // NaN
+"Hace 20 dias"; // NaN
+"44aa33bb"; // NaN
+""; // 0 -> ¡¡el string vacio se convierte a 0!!
+" "; // 0
+null; // 0
//boolean
+true; // 1
+false; // 0
 
//también podemos incluir una expresión con resultado boolean

+(1<2); // 1

+(1===2); // 0


//En resumen: 

// parseInt() tiene un parámetro extra para indicar la base del número (radix).
// parseFloat() no admite radix. Todos los números se consideran en base decimal.
// parseInt(), Number() y '+' interpretan el prefijo '0x' como número hexadecimal, parseFloat() no.
// parseInt() y parseFloat() pueden extraer un número al principio de un string.
// Si el string contiene caracteres no numéricos, Number() y '+' no lo convierten, devuelven NaN.
// Cuando el argumento es un objeto, parseInt() y parseFloat() llamarán al método .toString() antes de analizar la cadena. Number() y +var llamarán primero a .valueOf() y despues a .toString() si es necesario.
// parseInt() no entiende la notación exponencial, todos los demás si.
// parseInt() y parseFloat() convierten el string vacio en NaN.
// Number() y '+' convierten el string vacio en 0.
// parseInt() y parseFloat() de un boolean es NaN.
// Number() y '+' de un boolean devuelven 0 para false y 1 para true.
