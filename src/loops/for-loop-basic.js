const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i =0; i <4; i++){
  numsZeroToThree[i]=i;
}

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
let five=5;
for (let i =0; i <6; i++){
  numsFiveToTen[i]=five++;
}

// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
let even=0;
for (let i =0; i <4; i++){
  evenNums[i]=even;
  even=even+2;
}

// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
let count=3;
for (let i =0; i <4; i++){

 countdown[i]=count;
 count--;

}

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
