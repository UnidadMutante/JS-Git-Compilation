//typeof me dice que tipo de dato guarda mi variable

var booleano = true
var numerico = 22
var numerico_flotante = 13.56
var texto = "mi texto"
var fecha = new Date()

document.write("<br>El tipo de booleano es: " + typeof booleano)
document.write("<br>El tipo de numerico es: " + typeof numerico)
document.write("<br>El tipo de numerico_flotante es: " + typeof numerico_flotante)
document.write("<br>El tipo de texto es: " + typeof texto)
document.write("<br>El tipo de fecha es: " + typeof fecha)

//Si el tipo de una variable es undefined, puede utilizarse para obtener la respuesta sobre si la variable ha sido inicializada o no.
 
let variable;
if(typeof variable == 'undefined') {
console.log('La variable vale undefined, no tiene valor definido')

}