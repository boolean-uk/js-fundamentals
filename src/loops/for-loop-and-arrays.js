const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to the sum of all the values in nums

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i]
}

// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])

const doubledNums = (arr) => {
  const doubledArr = []
  for (let j = 0; j < arr.length; j++) {
    doubledArr.push(arr[j] * 2)
  }
  return doubledArr
}

// Use a for loop to set word equal to all the letters in the letters array

for (let k = 0; k < letters.length; k++) {
  word = word + letters[k]
}

// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = []

// Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = []

// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
