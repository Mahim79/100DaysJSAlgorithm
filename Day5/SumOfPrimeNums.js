// Function for check is it prime number ?
function isPrime(num){
    if(num == 2){
        return true
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }

    return true
}

// here will be push all prime numbers
let primeNums = []

// Function for each filtered number to push in primeNums
function filterPrime(n){
    
    for(let i =2; i < n ; i++){
        if(isPrime(i)){
             primeNums.push(i)
        }
    }
}

filterPrime(10)

//calculate the sum of primeNums array using reduce method 
const sumOfPrime = primeNums.reduce((acc,el)=>{
    return acc += el
})


console.log(sumOfPrime);
// console.log(primeNums);







