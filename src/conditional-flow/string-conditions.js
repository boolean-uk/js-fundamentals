// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  if (val1 == 'Hello') {
    return true
  } else {
    return false
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  if (val1 != 'Hello') {
    return true
  } else {
    return false
  }
  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  if (val1.length > val2.length) {
    return true
  } else {
    return false
  }

  // TODO: write code in this function body to pass the tests
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  let vowelsNum = 0
  let result

  for (let i = 0; i < val1.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (val1[i] == vowels[j]) {
        vowelsNum = vowelsNum + 1
      }
    }
  }

  if (vowelsNum % 2 == 0) {
    return (result = false)
  } else {
    return (result = true)
  }
}
// TODO: write code in this function body to pass the tests

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  let val2 = Array.from(val1)

  let valStr = ''

  let valNum = val1.length
  let halfStr = valNum / 2
  halfStr = halfStr.toFixed(0)
  //Even String
  if (valNum % 2 == 0) {
    valStr = val2[halfStr - 1] + val2[halfStr]
    console.log(valStr + ' ' + halfStr)
  } //Odd String
  else if (valNum % 2 != 0) {
    valStr = val2[halfStr - 1]
  }

  return valStr
  // TODO: write code in this function body to pass the tests
}

// This function should return the name of the season for the provided
// month name.
//For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth(monthName) {
  // TODO: write code in this function body to pass the tests
 
  let season;

  if(monthName == 'March' || monthName == 'April' || monthName == 'May') {
    season = 'Spring';
  }else if(monthName =='June' || monthName == 'July' || monthName == 'August'){
    season = 'Summer';
  }else if(monthName == 'September' || monthName == 'October' || monthName =='November'){
    season='Autumn';
  }else if(monthName == 'December' || monthName=='January'|| monthName=='February'){
    season='Winter';
  }else{
      season="";
    
  
  }
  return season;
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
