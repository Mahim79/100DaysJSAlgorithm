
const sumOfDigits = (num)=>{
    // const arr = String(num).split("")
    const arr = Array.from(String(num),Number)
    const sum = arr.reduce((accum,el)=> accum += el,0)

    return sum
    
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
