// Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

function capitalizar(str) {
    
    let frase = str
    // console.log(frase)
    frase.toLowerCase()
    const fraseArray = frase.split(" ")
    // console.log(fraseArray)
    for(let i= 0;i<fraseArray.length;i++){        
        fraseArray[i]=fraseArray[i].replace(fraseArray[i][0],fraseArray[i][0].toUpperCase())
    }
    
    return fraseArray.join(" ")
    // console.log(fraseArray)
}

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"

