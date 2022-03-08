// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.
function getResult (didPass) {
  // TODO: write code in this function body to pass the tests

  if (didPass) {
    return "Well done, you passed!"
  }
  return "Sorry, try again"
}
// if well done phrase is not displayed then it assume you did not pass and display try again
module.exports = {
  a: getResult
}
