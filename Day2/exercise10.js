// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

//     "Bajo de peso" si el BMI < 18.5
//     "Normal" si está entre 18.5 y 24.9
//     "Sobrepeso" si está entre 25 y 29.9
//     "Obeso" si es igual o mayor a 30



let weight = parseInt(prompt("Escribe tu peso"))
let height = parseInt(prompt("Digita tu altura"))

let bmi = weight / height ** 2

if(bmi < 18.5){
    console.log("Bajo de peso");
}else if(bmi > 18.5 && bmi < 24.9){
    console.log("Normal");
}else if(bmi > 25 && bmi < 29.9){
    console.log("Sobrepeso");
}else{
    console.log("Obeso");
}



/*"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

console.log(bmi);