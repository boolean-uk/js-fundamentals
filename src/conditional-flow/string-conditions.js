// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {
  if (val1 === "Hello"){
    return true
  }
  if (val1 !== "Hello") {
    return false
  }
}

  // TODO: write code in this function body to pass the tests


// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {
  if (val1 !== "Hello") {
    return true
  }
  if (val1 === "Hello") {
    return false
  }
}
  // TODO: write code in this function body to pass the tests


// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {
  if (val1.length > val2.length) {
    return true
  }
  else {
    return false
  }

  // TODO: write code in this function body to pass the tests

}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  const vowelsInString = []
  for (i=0; i<val1.length; i++){
    if (i=vowels){
      vowelsInString.push()
    }
  }
 
}
  // TODO: write code in this function body to pass the tests



// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
}

function extractMiddle(str) {

  var position;
  var length;

  if(str.length() % 2 == 1) {
      position = str.length() / 2;
      length = 1;
  } else {
      position = str.length() / 2 - 1;
      length = 2;
  }

  result = str.substring(position, position + length)

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
  const spring = [March, Arpil, May]
  const summer = [June, July, August]
  const autumn = [September, October, November]
  const winter = [December, January, February]
  if (monthName === spring) {
    return "Spring"
  }
  else if (monthName === summer) {
    return "Summer"
  }
  else if (monthName === autumn) {
    return "Autumn"
  }
  else if (monthName === winter){
    return "Winter"
  }
  else {
    return ""
  }

  // TODO: write code in this function body to pass the tests
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
