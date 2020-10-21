//operadores artitmeticos

// + Suma 
// - Resta, también puede utilizarse para cambiar el signo de un número si lo utilizamos con un solo operando -23
// * Multiplicación 
// / División 
// % El resto de la división de dos números (3%2 devolvería 1, el resto de dividir 3 entre 2)
// ++ Incremento en una unidad
// -- Decremento en una unidad

//operadores de asignacion

// = Asignación. Asigna la parte de la derecha del igual a la parte de la izquierda. A la derecha se colocan los valores finales y a la izquierda generalmente se coloca una variable donde queremos guardar el dato.
// += Asignación con suma. Realiza la suma de la parte de la derecha con la de la izquierda y guarda el resultado en la parte de la izquierda.
// -= Asignación con resta
// *= Asignación de la multiplicación
// /= Asignación de la división
// %= Se obtiene el resto y se asigna

// Ejemplos
// ahorros = 7000 //asigna un 7000 a la variable ahorros
// ahorros += 3500 //incrementa en 3500 la variable ahorros, ahora vale 10500
// ahorros /= 2 //divide entre 2 mis ahorros, ahora quedan 5250

//operadores logicos

// ! Operador NO o negación. Si era true pasa a false y viceversa.
// && Operador Y, si son los dos verdaderos vale verdadero.
// || Operador O, vale verdadero si por lo menos uno de ellos es verdadero.

//operadores condicionales

// == Comprueba si dos valores son iguales
// === que dos valores sean 100% iguales
// != Comprueba si dos valores son distintos
// > Mayor que, devuelve true si el primer operando es mayor que el segundo
// < Menor que, es true cuando el elemento de la izquierda es menor que el de la derecha
// >= Mayor igual
// <= Menor igual

// Precedencia de los operadores
 
//En un principio todos los operadores se evalúan de izquierda a derecha, 
//pero existen unas normas adicionales, por las que determinados operadores se evalúan antes que otros. 
//Muchas de estas reglas de precedencia se basan de normas matemáticas y son comunes a otros lenguajes.

// () [] . Paréntesis, corchetes y el operador punto que sirve para los objetos
// ! - ++ -- negación, negativo e incrementos
// * / % Multiplicación división y módulo
// +- Suma y resta
// << >> >>> Cambios a nivel de bit
// < <= > >= Operadores condicionales
// == != Operadores condicionales de igualdad y desigualdad
// & ^ | Lógicos a nivel de bit
// && || Lógicos booleanos