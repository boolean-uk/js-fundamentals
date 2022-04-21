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
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelsInString = 0;
  for (let i=0; i<val1.length; i++){
    if (vowels.includes(val1[i])) {
      vowelsInString++
    }
  }
  return Boolean(vowelsInString % 2);
}

  



    
  // TODO: write code in this function body to pass the tests



// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  if (val1.length % 2 === 1) {
    let half = val1.length / 2;
    let mid = Math.floor(half);
    return val1[mid];
  }
  if (val1.length % 2 === 0) {
    let middleTwo = val1.length / 2;
    let middleOne = middleTwo - 1;
    return  val1[middleOne] + val1[middleTwo];
}
}

 

 // TODO: write code in this function body to pass the tests

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
  switch (monthName) {
    case "March":
    case "April":
    case "May":
      season = "Spring"
      break;
    case "June":
    case "July":
    case "August":
      season = "Summer"
      break;
    case "September":
    case "October":
    case "November":
      season = "Autumn"
      break;
    case "December":
    case "January":
    case "February":
      season = "Winter"
      break;
    default:
      season = ""
  }
  return season;
}


  
  // TODO: write code in this function body to pass the tests

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
