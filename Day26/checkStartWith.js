
const checkStartWith = (str, subStr)=>{

    // Biltin Method
    // return str.toLowerCase().startsWith(subStr.toLowerCase())

    return str.slice(0,subStr.length).toLowerCase() === subStr.toLowerCase()
    
}

console.log(checkStartWith("Hello World","hello")); // true
console.log(checkStartWith("NoMoreToday","nobody")); // false
