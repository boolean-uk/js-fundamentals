const nums = [1, 3, 12, 5, 1, 6, 4, 1, 10]
const letters = ['H', 'e', 'l', 'l', 'o']
let sum = 0
let word = ''

// TODO: Add code below this line to make the tests pass

// Use a for loop to set the sum variable to{} the sum of all the values in nums

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }


// Use a for loop to populate doubledNums with every value from nums array doubled (i.e [2, 6, 24, etc...])
  let doubledNums=[]
  for (let i = 0; i < nums.length; i++) {
    doubledNums[i] = nums[i]*2;
  }


// Use a for loop to set word equal to all the letters in the letters array
word = '';
let newWord=[];
for (let i = 0; i < letters.length; i++) {
  newWord[i] = letters[i];
}
word = newWord.join('');

// Use a for loop to populate everySecondNum with every second number from the nums array
const everySecondNum = [];
let count1=0;

for (let i = 0; i < nums.length; i++){
 
 if(i%2 != 0){
  everySecondNum[count1] =nums[i];
  count1++;
 }

}
// Use a for loop to populate numsReversed with the numbers from nums in reverse order
const numsReversed = [];
let count = 0;
console.log(nums.length);
for (let i = nums.length; i > 0; i=i-1){
  numsReversed[count]=nums[i-1];
  console.log(numsReversed[count]);
  count=count+1;

}



// do not change below this line
module.exports = {
  a: sum,
  b: doubledNums,
  c: word,
  d: everySecondNum,
  e: numsReversed
}
