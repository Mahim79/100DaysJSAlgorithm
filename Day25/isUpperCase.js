
// Using charCodeAt method
const isUpperCase = (char)=>{
    if(char.length > 1) return "Input char should be a single character"
    if(char.charCodeAt() >= 65 && char.charCodeAt() <=90){
        return true
    }
    return false
}

console.log(isUpperCase("B"));
