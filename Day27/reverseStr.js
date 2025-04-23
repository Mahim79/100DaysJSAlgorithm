
function reverseStr(str){
    // check the input is a string
    if( typeof(str) !== "string") return "Please input a string"

    let reversedStr = ""

    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i]
    }

    return reversedStr

}

console.log(reverseStr("hello"));
