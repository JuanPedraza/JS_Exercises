// Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

promedio([1,2,3])

function promedio(numbers){
    let sum = 0;
    for(let i= 0;i<numbers.length;i++){        
        sum += numbers[i];      
    }
    return sum / numbers.length
}

// Casos de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200