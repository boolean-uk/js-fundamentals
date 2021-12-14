// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  if (val1 === "Hello") {
    return true;
  } else {
    return false;
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  if (val1 !== "Hello") {
    return true;
  } else {
    return false;
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  if (val1.length > val2.length) {
    return true;
  } else {
    return false;
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  let count = 0;
  let smallVal = val1.toLowerCase();
  for (i = 0; i < smallVal.length; i++) {
    if (
      smallVal[i] == "a" ||
      smallVal[i] == "i" ||
      smallVal[i] == "e" ||
      smallVal[i] == "o" ||
      smallVal[i] == "u"
    ) {
      count++;
    }
  }
  if (count % 2 === 1) {
    return true;
  } else {
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
    let oddIndex = Math.floor(val1.length / 2);
    return val1[oddIndex];
  } else {
    let evenIndex = val1.length / 2;
    return val1[evenIndex - 1] + val1[evenIndex];
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
  let LowerCaseMonthName = monthName.toLowerCase();
  switch (LowerCaseMonthName) {
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    default:
      return "";
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
