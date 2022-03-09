// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {

  // TODO: write code in this function body to pass the tests
  if (array === []) {
    return true
  } 
  else {
    return false
  }

}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {

  // TODO: write code in this function body to pass the tests
if (num1 > num2) {
  return true
}
else {
  return false
 }

}

// This function should return the lowest number in the passed array
function findLowest (nums) {

  // TODO: write code in this function body to pass the tests

  // PseudoCode:
  // 1. You want to find the lowest number inside this array [10, 8, 4, 1, 8].
  // 2. It's 1, so show it using Math.min 
  // 3. return the result. It will happen automatically when you write down the const name (lowestNum)
 const lowestNum = Math.min(...nums)
 return lowestNum
}

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}

// npx jasmine spec/conditional-flow/numeric-conditions.spec.js