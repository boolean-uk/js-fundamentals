//
//
//
// TODO: Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = "";
const firstName = "Jane";
try {
  firstNameExport = firstName;
} catch (e) {}

let ageExport = 0;
const age = 35;
try {
  ageExport = age;
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport,
};
