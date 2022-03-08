// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests
  if(val1 === "Hello"){
    return true
  }
  return false

}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests
  if(val1 !== "Hello"){
    return true
  }
  return false

}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests

  if(val1.length > val2.length){
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

  let countVowels = 0;
  for (i = 0; i < val1.length; i++){
    if ((val1[i] == "a") || (val1[i] == "e") || (val1[i] == "i") || (val1[i] == "o") || (val1[i] == "u") || (val1[i] == "A") || (val1[i] == "E") || (val1[i] == "I") || (val1[i] == "O") || (val1[i] == "U")){
      countVowels += 1;
    }
  }
  if (countVowels % 2 === 0){
    return false;
  }
  else {
    return true;
  }
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests

if (val1.length % 2 === 0) {
  middleTwo = val1.length / 2;
  middleLower = middleTwo - 1;
  middleUpper = middleTwo;
  return val1[middleLower] + val1[middleUpper];
}
else {
  middleOne = (val1.length / 2) - 0.5;
  return val1[middleOne];
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

  switch(monthName) {
    case "December": 
    case "January": 
    case "February":
      Text = "Winter";
      break;
    case "March": 
    case "April": 
    case "May":
      Text = "Spring";
      break;
    case "June": 
    case "July":  
    case "August":
      Text = "Summer";
      break;
    case "September": 
    case "October": 
    case "November":
      Text = "Autumn";
      break;
    default:
     Text = "";
  }
  return Text
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
