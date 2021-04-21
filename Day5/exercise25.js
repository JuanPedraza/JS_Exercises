// Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

//     Las mayúsculas se reemplazan por minúsculas.
//     Se eliminan los espacios en blanco.
//     Reemplaza el caracter "a" por "4".
//     Reemplaza el caracter "e" por "3".
//     Reemplaza el caracter "i" por "1".
//     Reemplaza el caracter "o" por "0".

let frase = prompt("Ingresa una frase");

// Usando expresiones regulares para completar el ejercicio


frase = frase.toLowerCase()
frase = frase.replace(/ /g, "")
frase = frase.replace(/a/g, "4")
frase = frase.replace(/e/g, "3")
frase = frase.replace(/i/g, "1")
frase = frase.replace(/o/g, "0")

console.log(frase)
