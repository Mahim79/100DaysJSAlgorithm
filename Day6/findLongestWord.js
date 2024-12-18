
const arr =["C++","Julia","JavaScript","Python","Java","TypeScript"]
let longestWord = arr[0]

function findLongestWord(arr){
    if(arr.length == 0){
        return false
    }

    for(let i = 0;i<arr.length;i++){
        if(arr[i].length > longestWord.length){
            longestWord = arr[i]
        }
    }
}


findLongestWord(arr);
console.log(longestWord);
