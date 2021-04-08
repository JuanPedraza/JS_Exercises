let number = Math.floor(Math.random() * 10) + 1

let guess = parseInt(prompt("Intenta adivinar un número entre 1 y 10: Digita el número:"))

if (guess === number){
    console.log("¡Felicidades, ese era!");
}else{
    console.log("¡Lo siento, sigue intentando");
}

