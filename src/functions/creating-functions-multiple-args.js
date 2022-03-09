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

function range(lower, upper) {
  const result = [];
  // Here is where we do more logical stuff
  // psuedo code - clarify what steps you need to take
  // start with lower
  // increment by 1
  // until the current number is more than the upper
  // for each we store it in the result array (push())
  for (let i = lower; i <= upper; i++) {
    console.log(i);
    result.push(i);
    console.log(result);
  }

  return result;
}

//   const theArray = []

//   for (let i = lower; i <= upper; i++)

//   input = [1,3];
//   theArray.push(i)

//   return theArray
// }

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

function shouty(str, num) {
  // maniplulate the result variable
  // upper case the string
  let result = str.toUpperCase();
  // then we need to create xnum '!' - let's use a loop to define how many times to do a certain procedure
  let marks = "";
  for (let i = 0; i < num; i++) {
    console.log(i);
    marks += "!";
  }
  console.log(marks);
  // then we need to combine
  result += marks;
  console.log(result);
  // then we return the result

  return result;
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: range, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shouty, // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
};
