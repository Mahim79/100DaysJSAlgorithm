
function minimumSum(num){
    const arr = num.toString().split("").sort((a,b)=> (a-b))
    const minSum = Number(arr[0] + arr[2]) + Number(arr[1] + arr[3])

    return minSum
}

console.log(minimumSum(2932));
