// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2

// Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".

let weight = parseInt(prompt("Escriba su peso"))

let height = parseInt(prompt("Escribe tu altura"))

let bmi = weight / height ** 2

console.log(`Tu índice de masa corporal es: ${bmi}`);