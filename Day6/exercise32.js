// La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

//     Si el número es 1 retorna "El color es negro".
//     Si el número es 2 retorna "El color es blanco".
//     Si el número es 3 retorna "El color es azul".
//     De lo contrario retorna "El color es verde".

function calcularColor(num) {
    
    if (num === 1) {
    let color = "negro";
    return `El color es ${color}`
    } else if (num === 2) {
    let color = "blanco"
    return `El color es ${color}`
    } else if (num === 3) {
    let color = "rojo";
    return `El color es ${color}`
    } else {
    let color = "verde";
    return `El color es ${color}`
    }

    
}


console.log(calcularColor(1)) 
console.log(calcularColor(2)) 
console.log(calcularColor(3)) 
console.log(calcularColor(8)) 