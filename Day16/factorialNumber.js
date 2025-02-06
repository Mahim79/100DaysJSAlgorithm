
const generateFactorial = (num)=>{
    let arr = []

    for(let i=1; i <= num;i++){
         arr.push(i)
    }

    let factorial = arr.reduce((acc,el)=>{
        return acc*el
    })

    return factorial
    
}


console.log(generateFactorial(5));
