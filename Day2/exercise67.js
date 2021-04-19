// Escribe un programa que le pida al usuario ingresar un número.

//     Si el número es múltiplo de 3 debe imprimir en la consola "bing".
//     Si el número es múltiplo de 5 debe imprimir en la consola "bong".
//     Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
//     Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.



let number = parseInt(prompt("Digite un número: "))

let multipleOfFive = number % 5
let multipleOfThree = number % 3


if(multipleOfThree === 0 && multipleOfFive === 0){
    console.log("BingBong")
}else{
    console.log(number)
}

if (multipleOfThree === 0){
    console.log("Bing")
}else if(multipleOfFive === 0){
    console.log("Bong")
}
