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

function multipleArgs(numLower, numUpper) {
  let emptyArray = [];
  for (let i = 0; i < numUpper - numLower + 1; i++) {
    emptyArray.push(numLower + i);
  }
  return emptyArray;
}

console.log(multipleArgs(-13, 1));
console.log(multipleArgs(10, 13));
console.log(multipleArgs(-1, 1));
// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//

function stringNumber(initialString, num) {
  let finalString = initialString.toUpperCase();
  for (let j = 0; j < num; j++) {
    finalString = finalString + "!";
  }
  return finalString;
}

console.log(stringNumber("HeyHo", 7));

// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

// change the exported value to be the name of the function you defined
module.exports = {
  a: multipleArgs, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: stringNumber, // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
};
