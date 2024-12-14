
const matrix = ["abc","xyz","lmn"]

function addBordered(matrix){
    border = "*".repeat(matrix[0].length)

    matrix.unshift(border)
    matrix.push(border)

    for(let i=0; i < matrix.length; i++){

        matrix[i]="*".concat(matrix[i]).concat("*")
        
        console.log(matrix[i]);
        
    }
    
   
}

addBordered(matrix)

// console.log(matrix);
