// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.
function getResult (didPass) {
  if (didPass) {
    return "Well done, you passed!"
  }
    return "Sorry, try again"
}


module.exports = {
  a: getResult
}
