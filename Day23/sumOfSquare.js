const sumOfSquare = (arr)=>{
    return arr.reduce((acc,el) =>{
        return acc += el*el
    },0)
}

console.log(sumOfSquare([1,2,3]));
console.log(sumOfSquare([5,10]));