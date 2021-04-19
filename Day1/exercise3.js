//Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario. 

let numberOne = parseInt(prompt("Escriba un número"))
let numberTwo = parseInt(prompt("Escriba un segundo número"))

let suma = numberOne + numberTwo

console.log(`El resultado de ${numberOne} y ${numberTwo} es: ${suma}`);