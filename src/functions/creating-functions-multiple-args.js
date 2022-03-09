// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

const  arrayMaker = function (lower, upper){
const numsArray = []
 for (let i=lower; i <= upper; i++){
 numsArray.push(i)
 }
 return numsArray
}

// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

const alert = function (str, num){

  stringUpper = str.toUpperCase();

   for (let i = 0; i < num; i++){
     stringUpper += '!';
   }

   return stringUpper;
  }
  

// change the exported value to be the name of the function you defined
module.exports = {
  a: arrayMaker, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: alert // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
