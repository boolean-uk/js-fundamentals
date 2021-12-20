const numsZeroToThree = []
const numsFiveToTen = [5, 6, 7, 8, 9, 10]
const evenNums = [0, 2, 4, 6]
const countdown = [3, 2, 1, 0]

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i=0; i<numsZeroToThree; i++)
console.log(i)
// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let i=5; i>numsFiveToTen; i++)
console.log(i)
// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let i=0; i>evenNums; i+=2)
console.log(i)
// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let i=3; i>=0; i--)
console.log(i)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
