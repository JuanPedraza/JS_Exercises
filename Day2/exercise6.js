let number = parseInt(prompt("Digite un número: "))

let multipleOfFive = number % 5
let multipleOfThree = number % 3



if (multipleOfThree === 0){
    console.log("Bing")
}else if(multipleOfFive === 0){
    console.log("Bong")
}else if(multipleOfThree === 0 && multipleOfFive === 0){
    console.log("BingBong")
}else{
    console.log(number)
}