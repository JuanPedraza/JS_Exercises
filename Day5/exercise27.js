// Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea

let phrase = prompt("Escriba una frase")
const arrPhrase = phrase.split(" ")

for(let i = 0; i < arrPhrase.length; i++){
    console.log(arrPhrase[i]);
}

