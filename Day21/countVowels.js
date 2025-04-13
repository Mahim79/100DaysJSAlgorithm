
const countVowels = (str)=>{
    const convertToArray = str.split("")
    const vowels = convertToArray.reduce((acc,letter)=> {
        let lowercaseLetter = letter.toLowerCase()
        
        if(lowercaseLetter === "a" || lowercaseLetter === "e" || lowercaseLetter === "i" || lowercaseLetter === "o" || lowercaseLetter === "u"){
             acc++
        }
        return acc
    },0)    
    return vowels
}   

console.log(countVowels("HEllow world"));
