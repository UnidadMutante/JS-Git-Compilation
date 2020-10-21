
var dia = 'lunes';

if (dia == "lunes"){

document.write ("<h1>Que tengas un feliz comienzo de semana"+"<h6>")
}

//otro ejemplo
// if (credito >= precio) {
//     document.write("has comprado el artículo " + nuevoArtículo) //enseño compra
//     carrito += nuevoArticulo //introduzco el artículo en el carrito de la compra
//     credito -= precio //disminuyo el crédito según el precio del artículo
//     } else {
//     document.write("se te ha acabado el crédito") //informo que te falta dinero
//     window.location = "carritodelacompra.html" //voy a la página del carrito
//     }
    

// if (bateria < 0.5 && redElectrica == 0) {
// document.write("la notebook se va a apagar en segundos")
// }

// sentencias if anidadas
var numero1 = 23
var numero2 = 63

if (numero1 == numero2){
document.write("Los dos números son iguales")
}
else{
if (numero1 > numero2) {
document.write("El primer número es mayor que el segundo")
}
else{
document.write("El primer número es menor que el segundo")
}
}

// un modo mas corto de escribir lo mismo
//Variable = (condición) ? valor1 : valor2

var hora_actual = 10; 
var momento = (hora_actual < 12) ? document.write("<br>Antes del mediodía") : document.write("Después del mediodía")

//SWITCH

// switch (expresión) {
//     case valor1:
//        Sentencias a ejecutar si la expresión tiene como valor a valor1
//        break
//     case valor2:
//        Sentencias a ejecutar si la expresión tiene como valor a valor2
//        break
//     case valor3:
//        Sentencias a ejecutar si la expresión tiene como valor a valor3
//        break
//     default:
//        Sentencias a ejecutar si el valor no es ninguno de los anteriores
//  }

var dia_de_la_semana = 4;
switch (dia_de_la_semana) {
    case 1:
       document.write("Es Lunes")
       break
    case 2:
       document.write("Es Martes")
       break
    case 3:
       document.write("Es Miércoles")
       break
    case 4:
       document.write("Es Jueves")
       break
    case 5:
       document.write("Es viernes")
       break
    case 6:
    case 7:
       document.write("Es fin de semana")
       break
    default:
       document.write("Ese día no existe")
 }

 // bucle FOR
 //El bucle FOR se usa para repetir una o más instrucciones un determinado número de veces. 
 //De entre todos los bucles, el FOR se suele usar cuando sabemos seguro el número de veces que queremos que se ejecute. 
 //La sintaxis del bucle for se muestra a continuación.

//for (inicialización; condición; actualización) {
   //sentencias a ejecutar en cada iteración
//}

var i
for (i=0;i<=10;i++) {
   document.write('<br>'+i)
}

document.write('de dos en dos: ')
for (i=1;i<=10;i+=2) {
   document.write(i+' ')
}

document.write('descendente uso --  ')
for (i=20;i>=10;i--) {
   document.write(i+' ')
}