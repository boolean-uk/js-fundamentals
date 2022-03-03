const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i <= 3; i++) {
  numsZeroToThree.push(i)
}

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let j = 5; j <= 10; j++) {
  numsFiveToTen.push(j)
}

// // TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let k = 0; k <= 6; k += 2) {
  evenNums.push(k)
}

// // TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let l = 3; l >= 0; l--) {
  countdown.push(l)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
