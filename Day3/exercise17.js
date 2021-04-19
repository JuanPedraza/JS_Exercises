// Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let number = Math.floor(Math.random() * 10) + 1
console.log(number);

let guess = parseInt(prompt("Intenta adivinar un número entre 1 y 10: Digita el número:"))

while(guess != number){
    guess = parseInt(prompt("Intenta nuevamente"))
    
}
console.log("Lo lograste");