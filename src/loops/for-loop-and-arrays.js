const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10];
const letters = ["H", "e", "l", "l", "o"];
let sum = 0;
let word = "";

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to the sum of all the values in nums

for (let j = 0; j < nums.length; j++) {
  sum = sum + nums[j];
}

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
const doubledNums = [];
for (let j = 0; j < nums.length; j++) {
  double = nums[j] * 2;
  doubledNums.push(double);
}
// Use a for loop to set word equal to all the letters in the letters array
word = "";
for (let j = 0; j < letters.length; j++) {
  word = word + letters[j];
}
// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = [];
for (let j = 1; j < nums.length; j += 2) {
  let second = nums[j];
  everySecondNum.push(second);
}

// Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = [];

for (let j = nums.length - 1; j >= 0; j--) {
  let num = nums[j];
  numsReversed.push(num);
}

// console.log(num);
// numsReversed.push(num);

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed,
};
