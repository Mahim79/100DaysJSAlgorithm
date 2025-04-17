
// A simplest way
const isLowerCase = (char)=>{

    if(char.length > 1) return "Input char should be a single character"
    return char === char.toLowerCase()
}

console.log(isLowerCase("d"));
