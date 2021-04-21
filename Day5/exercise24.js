// Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase.

let phrase = prompt("Escriba una frase: ")

let letter = 0

for(let i = 0; i<phrase.length; i++){
    
    if(phrase[i].toLowerCase() === "a"){
        letter++
    }
    console.log(`Hay ${letter} a en la frase`);
}


