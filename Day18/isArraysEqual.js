
const isArraysEqual = (arr1,arr2)=>{
    if(arr1.length === arr2.length){
       return arr1.every((el,ind)=> el === arr2[ind])
    }else{
        return false
    }
}

console.log(isArraysEqual([1,2,3],[1,2,3]));
