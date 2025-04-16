
// Convert to camelCase
const camelCase = (str)=>{
    str = str.trim().split(" ")
    str = str.map((el,ind)=> {
        if(ind === 0){
            return el.toLowerCase()
        }
        else{
           return  el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
        }
    })
    return str.join("");
    
}

console.log(camelCase("Hello World"));


// Convert to snake_case
const snake_case = (str)=>{
    str = str.trim().split(" ")
    str = str.map((el)=> el.toLowerCase())

    return str.join("_")
    
}

console.log(snake_case("Hellow World"));
