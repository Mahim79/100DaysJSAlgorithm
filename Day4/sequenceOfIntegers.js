const arr = [1,2,3,4,5,8,11]
function isSequence(arr){
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
       
    }
    return true
}

console.log(isSequence(arr));