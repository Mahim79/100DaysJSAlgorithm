const countChar = (str,char) =>{
    str = str.toUpperCase()
    char = char.toUpperCase()

    count = str.split("").reduce((acc,el) => {
        if(el === char){
            acc++
        }
        return acc
    },0)
    console.log(count);
    
}

countChar("Facilities","I")