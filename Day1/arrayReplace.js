
const inputArray = [1,2,1];

function replaceArray(inputArray,elementToReplace,subtractionElement){
    inputArray.forEach((element,index)=>{
        if(element === elementToReplace){
            inputArray[index] = subtractionElement
        }
        
    })
}

replaceArray(inputArray,1,3)
console.log(inputArray);
