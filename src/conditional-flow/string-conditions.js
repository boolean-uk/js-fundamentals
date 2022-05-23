// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {
  return val1 === "Hello"
  // TODO: write code in this function body to pass the tests

}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {
  return !isHello(val1)
  // TODO: write code in this function body to pass the tests

}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {
  return val1.length>val2.length
  // TODO: write code in this function body to pass the tests

}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels
function hasOddNumberVowels (val1) {
  let vowelCount=0;
    for (i=0; i<val1.length; i++) {
      if (val1.charAt(i).toLowerCase() === 'a'||
          val1.charAt(i).toLowerCase() === 'e'||
          val1.charAt(i).toLowerCase() === 'o'||
          val1.charAt(i).toLowerCase() === 'i'||
          val1.charAt(i).toLowerCase() === 'u'){
          vowelCount++
    }}
    return vowelCount%2 === 1;
  // TODO: write code in this function body to pass the tests

}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  let sliceValue = val1.length/2;
  // TODO: write code in this function body to pass the tests
return (val1.length%2===1) ?
  val1.slice(sliceValue,sliceValue+1) :
  val1.slice(sliceValue-1,sliceValue+1)
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
if (monthName==="March"||monthName==="April"||monthName==="May"){
  return "Spring"
} else if (monthName==="June"||monthName==="July"||monthName==="August"){
  return "Summer"
} else if (monthName==="September"||monthName==="October"||monthName==="November"){
  return "Autumn"
} else if (monthName==="December"||monthName==="January"||monthName==="February"){
  return "Winter"
} else return ""
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
