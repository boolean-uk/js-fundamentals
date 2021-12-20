// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {
  // TODO: write code in this function body to pass the tests
  return val1 === 'Hello'
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {
  // TODO: write code in this function body to pass the tests
  return !isHello(val1)
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {
  return val1.length > val2.length

  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

// TODO: write code in this function body to pass the tests
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function hasOddNumberVowels (val1) {
  let vowelsCount = 0
  for (let i = 0; i < val1.length; i++) {
    if (vowels.includes(val1[i])) {
      vowelsCount++
    }
  }
  if (vowelsCount % 2 !== 0) {
    return true
  } else {
    return false
  }
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
  const valLength = val1.length
  if (valLength % 2 === 0) {
    return val1[valLength / 2 - 1] + val1[valLength / 2]
  } else {
    return val1[(valLength - 1) / 2]
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

const winterMonths = ['December', 'January', 'February']
const springMonths = ['March', 'April', 'May']
const summerMonths = ['June', 'July', 'August']
const autumnMonths = ['September', 'October', 'November']

function seasonForMonth (monthName) {
  if (winterMonths.includes(monthName)) {
    return 'Winter'
  }
  if (springMonths.includes(monthName)) {
    return 'Spring'
  }
  if (summerMonths.includes(monthName)) {
    return 'Summer'
  }
  if (autumnMonths.includes(monthName)) {
    return 'Autumn'
  } else {
    return ''
  }
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
