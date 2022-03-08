// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty(array) {
  return array.length == 0 ? true : false;
  // TODO: write code in this function body to pass the tests
}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan(num1, num2) {
  // TODO: write code in this function body to pass the tests
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

// This function should return the lowest number in the passed array
function findLowest(nums) {
  // TODO: write code in this function body to pass the tests
  let i = 0;
  var lowest = nums[i];
  for (i = 0; i < nums.length; i++) {
    if (lowest > nums[i]) {
      lowest = nums[i];
    }
  }
  return lowest;
}

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest,
};
