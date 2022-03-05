// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {
  if (array.length === 0) {
    return true
  } 
  else {
    return false
  }
}

  // TODO: write code in this function body to pass the tests



// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {
  if (num1 > num2) {
    return true
  }
  else {
    return false
  }
}

  // TODO: write code in this function body to pass the tests



// This function should return the lowest number in the passed array


function findLowest (nums) {
  let smallest = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i]
    }
 }
 return smallest
}



  // TODO: write code in this function body to pass the tests



module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
