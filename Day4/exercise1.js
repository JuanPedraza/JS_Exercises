let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
let name = prompt("Digita un nombre")

nombres.push(name)

let anotherName = prompt("Digita otro nombre")

nombres[2] = anotherName

for(i = 0 ; i < nombres.length; i++){
    console.log(nombres[i]);
}
