
function isPalindrome(str){

   const strArr = str.toLowerCase().replace(/\W/g,"") // "/\W/g" means it removes all the special charecters and space without a-z, A-Z, 0-9
   const  reversedArr = strArr.split("").reverse().join("")


    console.log(strArr);
    console.log(reversedArr);
    
    return reversedArr === strArr ? true : false;
    
    
}

console.log(isPalindrome("A man, A plan, A canal, Panama"));
// console.log(isPalindrome("Race Car"));

