// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

let phrase = prompt("Escriba una frase")

let number = Number(prompt("Escriba un número"))

for(let i = 0; i < number; i++){
    console.log(phrase);
}
