// Escribe un programa que:

//     Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
//     Elimine el segundo elemento.
//     Recorra e imprima el arreglo.


let number = parseInt(prompt("Escriba un número"))
let arrNumbers = []
for(let i = 0; i < number; i++){
    arrNumbers.push(i)
    
}
console.log(arrNumbers)

arrNumbers.splice(1,1)

for(i = 0; i < arrNumbers.length; i++){
    console.log(arrNumbers[i]);
}
