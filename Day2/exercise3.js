let number = parseInt(prompt("Digite un número: "))

let multiple = number % 5

console.log(multiple);

if (multiple === 0){
    console.log(`El número ${number} es múltiplo de 5`);
}else{
    console.log(`El número ${number} no es múltiplo de 5`);
}