
const inpArr = [1,5,3,9,2];
// const inpArr = [-10,-5,-3,-9,-2];

function findMax(arr){
    return arr.reduce((acc,num)=> {
        if(acc < num){
            acc = num
        }
        return acc
    })
}

console.log(findMax(inpArr));
