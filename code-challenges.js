// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code: 
// Completed by Learn instructor per instructions
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// -----Pseudo code:
// Create a function named "temp" that takes the boiling point and makes it an argument to return defined outcomes "is at boiling point", "is below boiling point" and "is above boiling point".  Our Boiling point = 212
// Psuedocode
// Declaore a function called temp
// Set parameter of boilingpoint to pass through evaluation.
// Write conditional statements to compare parameter to var
// Return expected outputs depending on condition using string interpolation.

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// const temp = (boilingPoint) => {
//     if (boilingPoint === 212) {
//         return "is at boiling point"
//     } else if (boilingPoint < 212) {
//         return "is below boiling point"
//     } else if (boilingPoint > 212) {
//         return "is above boiling point"
//     }
// }
// console.log(temp(42))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// -----Pseudo code:
// First must join (concat) myNum1 and myNum2 to create new array.  Console log length of new array.

// const myNum1 = [1, 2, 3, 4, 5]
// const myNum2 = [6, 7, 8, 9, 6]
// const myNum3 = myNum1.concat(myNum2)
// console.log(myNum3.length) 
// Answer is 10



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// --------Pseudo code:
// Create function reverseWord, split all items in the string, reverse items in the string, and join items back in the string to create mirror of original string
// function reverseWord (sentence) {
//     return sentence.split(' ').map(function(word) {
//       return word.split('').reverse().join('');
//     }).join(' ');
//   }
  
//   console.log(reverseWord("2022 Delta"));
// Answer is 2202 atleD

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// create array with index less than 7.
// input = myArray with test array
// output = numbers with corresponding odd or even values
// create a for loop for myArray to filter through the array and distiguish betweeen odd and even values
// create a conditional statement to assign the odd value to odd numbers and even to numbers that are not odd.

 const myArray = [13, 34, 5, 10, 27, 42]
    for(let i = 1; i < myArray.length; i++){
     if(i % 2 !== 0){
        console.log("ODD")
        }else{
         console.log("EVEN")
     }
 }
 console.log()
// Answer is ODD EVEN ODD EVEN ODD EVEN

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: Console log two numbers assigned to a const that subtracts the smaller variable from the larger variable.
// Declare a function called
// Set paramaters to take in dig1 and dig2
// Use conditional statement to compare param
// Return result based on condition

// Set one:
// const number1 = 58
// const number2 = 100
// console.log(number2-number1)
// 42


// Set two:
// const number3 = 27
// const number4 = 24
// console.log(number3-number4)
// 3