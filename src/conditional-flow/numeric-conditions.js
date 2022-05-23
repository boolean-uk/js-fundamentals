// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {
      return array.length === 0 ? true : false;
  // TODO: write code in this function body to pass the tests

}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {
      return num1 > num2 == true;
  // TODO: write code in this function body to pass the tests

}

// This function should return the lowest number in the passed array
function findLowest (nums) {
  let lowest = nums[0];
  for (i=1;i<=nums.length;i++){
    if (nums[i] < lowest) {
      lowest = nums[i]
    }
  } return lowest      
  // TODO: write code in this function body to pass the tests

}

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
