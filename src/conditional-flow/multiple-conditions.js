// This function should return true if num is greater
// than or equal to lower AND less than or equal to upper.
// Implement this with a single condition.

// inputs => outputs
//       (4, 1, 6)) => (true)

//     (10, 1, 5)) => (false)

function isInRange(num, lower, upper) {
  return num >= lower && num <= upper;

  // TODO: write code in this function body to pass the tests
}

// This function should return true if the passed string is equal
// to "Hello" or "Goodbye". Implement this with a single
// if statement.

// "hello" => true
// "goodbye" => true
// "edward" => false

function isHelloOrGoodbye(val1) {
  if (val1 === "Hello" || val1 === "Goodbye") {
    return true;
  }
  return false;
}
// TODO: write code in this function body to pass the tests

// This function should return a string that describes the provided age value. The
// table below shows for each range of age values what string should be returned.
//
// For example, if an age of 3 is provided to the function, "Toddler" should be
// returned.
//
// Input   Output
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
function getAgeDescription(age) {
  let description = "";

  if (age === 0) {
    description = "Baby";
  } else if (age < 5) {
    description = "Toddler";
  } else if (age < 13) {
    description = "Child";
  } else if (age < 20) {
    description = "Teenager";
  } else {
    description = "Adult";
  }
  return description;
}
// TODO: write code in this function body to pass the tests

module.exports = {
  a: isInRange,
  b: isHelloOrGoodbye,
  c: getAgeDescription,
};
