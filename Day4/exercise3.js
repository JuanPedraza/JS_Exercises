const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
]
let number = 0

for (var i=0; i < mat.length; i++) {
    number +=1
    console.log(`Grupo ${number}:`);
    for (let j=0; j < mat[i].length; j++) {
    console.log(mat[i][j])
    }
}



