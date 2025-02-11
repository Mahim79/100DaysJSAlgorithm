
const calculateAverage = (arr)=>{
    const total = arr.reduce((accum,el)=> {
        return accum + el
    },0)
    return total / arr.length
    
}

console.log(calculateAverage([12,10,18,20]));
