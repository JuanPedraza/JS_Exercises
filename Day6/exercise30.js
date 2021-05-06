// Escribe una función llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamación.

function hola(name) {
    return `¡Hola ${name}!`
}

console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"