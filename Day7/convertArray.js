
const sentence = "The quick brown fox jumps over the lazy dog"

function findLongestWord(sentence){

    let makeArr = sentence.trim().split(" ")

    let longestWord = makeArr[0]

    for(word of makeArr){
        if(longestWord.length < word.length){
            longestWord = word
        }
    }

    console.log(longestWord);
    
}

findLongestWord(sentence)