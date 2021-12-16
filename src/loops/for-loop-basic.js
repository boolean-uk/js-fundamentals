const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for ( let x = 0; x <= 3; x++) {
  numsZeroToThree.push(x)
}
// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for ( let y = 5; y <= 10; y++) {
  numsFiveToTen.push(y)
}
// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for ( let e = 0; e <= 6; e += 2) {
  evenNums.push(e)
}
// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for ( let c = 3; c >= 0; c-- ) {
  countdown.push(c)
}
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
