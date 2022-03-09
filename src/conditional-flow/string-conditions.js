// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  return val1 === "Hello";
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  return val1 !== "Hello";
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  return val1.length > val2.length;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  const vowels = "aeiouAEIOU";
  count = 0;
  for (let j = 0; j < val1.length; j++) {
    if (vowels.includes(val1[j])) {
      count += 1;
    }
  }
  if (count % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log("line 28", hasOddNumberVowels("ioou"));
// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  if (val1.length % 2 === 0) {
    return val1.charAt(val1.length / 2 - 1) + val1.charAt(val1.length / 2);
  } else {
    return val1.charAt(Math.floor(val1.length / 2));
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
  monthName = monthName.toLowerCase();

  switch (monthName) {
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
