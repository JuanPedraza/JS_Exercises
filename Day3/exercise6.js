let number = Math.floor(Math.random() * 10) + 1
console.log(number);

let guess = parseInt(prompt("Intenta adivinar un número entre 1 y 10: Digita el número:"))

while(guess != number){
    guess = parseInt(prompt("Intenta nuevamente"))
    
}
console.log("Lo lograste");