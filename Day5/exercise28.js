// Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

let phrase1 = prompt("Ingresa una frase:")
let phrase2 = prompt("Ingresa otra frase:")
const match = []
for(let i= 0;i<phrase1.length;i++){        
    if(phrase2.includes(phrase1[i])){
    match.push(phrase1[i])
    }
}
if (match.length>0){
console.log(`Los caracteres en común son: ${match}`)
} else
console.log("No se encontraron caracteres en común")