// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  // TODO: write code in this function body to pass the tests
  if (val1 == 'Hello') {
    return true;
  } 
  else {
    return false;
  }
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  if (val1 !== 'Hello') {
    return true;
  } 
  else {
    return false;
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  if (val1.length > val2.length) {
    return true;
  } 
  else {
    return false;
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  let count = 0;
  let valLower = val1.toLowerCase();

  for (i = 0; i < valLower.length; i++) {
    if (
      valLower[i] == 'a' || valLower[i] == 'i' ||
      valLower[i] == 'e' || valLower[i] == 'o' ||
      valLower[i] == 'u'
    ) {
      count++;
    }
  }

  if (count % 2 === 1) {
    return true;
  } 
  else {
    return false;
  }

  // TODO: write code in this function body to pass the tests
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  // TODO: write code in this function body to pass the tests
  if (val1.length % 2 === 1) {
    let oddChar = Math.floor(val1.length / 2);
    return val1[oddChar];
  } 
  else {
    let evenChar = val1.length / 2;
    return val1[evenChar - 1] + val1[evenChar];
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

function seasonForMonth(monthName) {
  // TODO: write code in this function body to pass the tests
  // let inputMonth;

  switch (monthName) {
    case 'March':
    case 'April':
    case 'May':
      return 'Spring';
    case 'June':
    case 'July':
    case 'August':
      return 'Summer';
    case 'September':
    case 'October':
    case 'November':
      return 'Autumn';
    case 'December':
    case 'January':
    case 'February':
      return 'Winter';
    default:
      return '';
  }
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth,
};