

function generateHash(str){
    if(str.length == 0 || str.trim().length == 0){
        return false
    }

    let arr = str.split(" ")
    let toUpperCase = arr.map((el)=> el.replace(el[0],el[0].toUpperCase()))
    return `#${toUpperCase.join("")}`
}

console.log(generateHash("My name is mahim dewan"));
