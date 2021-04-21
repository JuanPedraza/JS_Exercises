// Escribe un programa que le pida una frase al usuario y capitalice cada palabra.

// let frase = prompt("Escriba una frase")

// console.log(frase.charAt(0).slice(1));


let frase = prompt("Ingresa una frase")
frase = frase.toLowerCase()
const fraseArray = frase.split(" ")
for(let i= 0;i<fraseArray.length;i++){        
    fraseArray[i]=fraseArray[i].replace(fraseArray[i][0],fraseArray[i][0].toUpperCase())
    
}
console.log(fraseArray.join(" "))