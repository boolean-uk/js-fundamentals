// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests

  return ( val1 === "Hello" ? true : false)

}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests

  return ( val1 !== "Hello" ? true : false)

}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests

  return ( val1.length > val2.length ? true : false)

}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {

  // TODO: write code in this function body to pass the tests

  const count = val1.match(/[aeiou]/gi).length;

  return (count % 2 !== 0 ? true : false);

}
// regEx - regular expression way to search through strings

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
// let numMiddle = 0
// let numsMiddle = 0

    if (val1.length % 2 === 0 ){

     numMiddle = (val1.length / 2) - 1;
     numMiddle2 = numMiddle + 1;

     return `${val1.charAt(numMiddle)}${val1.charAt(numMiddle2)}`;


    } else {
      
      numMiddle = val1.length / 2 ;

      return `${val1.charAt(numMiddle)}`;
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

  switch (monthName) {
    case 'March':
    case 'April':
    case 'May':
      szn = "Spring";
      break;

    case 'June':
    case 'July':
    case 'August':
      szn = "Summer";
      break;

    case 'September':
    case 'October':
    case 'November':
      szn = "Autumn";
      break;

    case 'December':
    case 'January':
    case 'February':
      szn = "Winter";
      break;

    default:
      szn = "";
  }
  return szn
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
