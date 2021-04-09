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
