//-- Problem 1 Sum Zero --
console.log('p1')
let numbersArr = [1, 3, 2, 3]
const addToZero = (arr) => {
    let zeroBool = true
    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[i]
        for (let j = 0; j < arr.length; j++) {
            let secondNum = arr[j]
            if (firstNum + secondNum <= 0){
                zeroBool = false;
            }
        }
    }
    return zeroBool
}
console.log(addToZero(numbersArr))

//this function has a runtime Big O = (n^2) because it utilizes a nested iteration within its iterations.
//EX CREDIT -- I believe the spatial complexity of this is O(n) because both number and array variables are being used to come to a conclusive awnser.

//-- Problem 2  Unique Characters --
console.log('p2')
let exampleWord = "bowl"
const hasUniqueChars = (word) => {
    let uniqueBool = true
    for (let i = 0; i < word.length; i++){
        let firstLetter = word[i]
        for (let j = 0; j < word.length; j++){
            let secondLetter = word[j]
            if (i === j) {
            } else if (firstLetter === secondLetter) {
                uniqueBool = false
            }
        }
    }
    return uniqueBool
}
console.log(hasUniqueChars(exampleWord))
//once again, this has a runtime Big O of (n^2) because it utilizes nested iterations.
//EX CREDIT -- this is a similar situation as question 1, while it may be using nested iterations, the amount of space used is still O(n)


//-- Problem 3 Pangram Sentence --
console.log(`p3`)
const examplePan = 'the quick brown fox jumps over the lazy dog'

const isPangram = (str) => {
    let uniqueStr = String.prototype.concat(...new Set(str))
    let panBool = true
    dictionary = 'abcdefghijklmnopqrstuvwxyz'
    truthArray = []
    for (let i = 0; i < dictionary.length; i++){
        let dictLetter = dictionary[i]
        for (let j = 0; j < uniqueStr.length; j++){
            let strLetter = uniqueStr[j]
            if (dictLetter === strLetter){
                truthArray.push('t')
                }
            }
        }
    if (truthArray.length === dictionary.length){
        panBool = true
    } else {
        panBool = false
    }
    return panBool
    }

    console.log(isPangram(examplePan))

//I think its appropriate to give this an O(n^3) because I iterated over the string to return only unique values, then performed nested iterations in order to conclude if there is unique letters in the string.
//EX CREDIT -- I wouldn't be surprised if this question came out to be larger then O(n) because alot of variable types and breakdowns are used to make this function work. but I'll stick with O(n)
// --Problem 4 Longest Word --

const wordList = [`scuba`, `raptor`, `Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch`, `rhinoceros` ]

const findLongestWord = (wordArr) => {
    let longestWord 
    let peak = wordArr[0].length
    for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i].length >= peak) {
            peak = wordArr[i].length
            longestWord = wordArr[i]
       }
    }
    return longestWord
}
console.log(findLongestWord(wordList))

//in contrast, this one is actually alot simpler, resulting in an O(n)
//EX CREDIT -- O(n) for similar reasons to all of the above.

