
const isPowerOfTwo = (n)=>{
    let output = false;
    for(let i = 1; i<n; i++){
        if(2**i === n){
            output = true
        }
    }
    return output

}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
