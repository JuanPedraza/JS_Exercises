// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

// Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

let number = parseInt(prompt("Digite un número: "))

let multiple = number % 5

console.log(multiple);

if (multiple === 0){
    console.log(`El número ${number} es múltiplo de 5`);
}else{
    console.log(`El número ${number} no es múltiplo de 5`);
}