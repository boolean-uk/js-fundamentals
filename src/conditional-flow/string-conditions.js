// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests
if (val1  === 'Hello') {
  return true
}
else {
  return false
}
}


// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests
  if (val1  !== 'Hello') {
    return true 
  }
  else {
    return false
  }
  }


// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests
if (val1.length > val2.length) {
  return true
}
else {
  return false
}
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {

  // TODO: write code in this function body to pass the tests

  const vowels = ['a','e','i','o','u','A','E','I','O','U'] 
  let count = 0
  for (let i = 0; i < val1.length; i++) {
    if (vowels.includes(val1[i])) {
      count++
    }
  }
  if (count%2 !== 0) {
  return true
}
else {
  return false
}
}


//for (let i = i; i > vowels.length; i+=2) 
 // if (val1 = vowels[i]) {

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
let position = [];
let length = '';
// name - Bobbie return length 6 - we want 'bb' returned

if (val1.length % 2 ==0) {
  position =val1.length / 2;
  // Bobbie 6 / 2 = 3 return strings 2 and 3
  // Mike 4 / 2 = 2 return string 1 and 2 
  length =0;
  return val1[position -1] + val1[position]
}
else {
  position = val1.length / 2 -1;
  // Kiran 5 / 2 =
  return val1[Math.ceil(position)]
}
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth (monthName) {

  // TODO: write code in this function body to pass the tests
  let seasons =''

  switch (monthName) {
    case 'March':
    case 'April':
    case 'May':
      seasons = 'Spring'
      break;
    case 'June':
    case 'July':
    case 'August':
      seasons = 'Summer'
      break;
    case 'September':
    case 'October':
    case 'November':
      seasons = 'Autumn'
      break;
    case 'December':
    case 'January':
    case 'February':
      seasons = 'Winter'
      break;
    
  }
  return seasons


  }


module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
