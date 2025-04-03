

// Using Filter Method---------------------
// function RemoveDuplicate(arr){
    
//     return arr.filter((el,ind)=>{
//         return arr.indexOf(el) === ind
//     })
// }



// Using Map Method--------------------
// function removeDuplicate(arr){
//     let newArr = []
//     arr.map((el)=> !newArr.includes(el) && newArr.push(el))
//     return newArr
// }
// console.log(removeDuplicate([1,2,3,1,2,4]));


// Using Set Global Object-----------------------
function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,2,3,1,2,4]));