const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let counter = 0
let counterTwo = 0
for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
        counter += 1
    }
    if(nums[i] === 0){
        counterTwo += 1
    }
}

console.log(`El número 0 se repite ${counterTwo} veces`);
console.log(`El número 1 se repite ${counter} veces`);