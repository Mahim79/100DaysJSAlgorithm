
const checkTriangleType = (a,b,c)=>{
    if(a==b && b==c){
        return "equilateral"
    }
    else if(a==b || b==c || a==c){
        return "isosceles"
    }else{
        return "scalene"
    }
}

console.log(checkTriangleType(30,30,60));
