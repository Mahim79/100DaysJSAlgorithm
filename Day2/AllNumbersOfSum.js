
function allNumbersOfSum(...params){
    let sum = 0;
    params.forEach((element)=>{
        sum += element
    })
    return sum
} 

console.log(allNumbersOfSum(5,35,10,50));
