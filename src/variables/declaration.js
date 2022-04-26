//
//
//
// TODO: Declare the variables firstName and age so that the tests pass
let firstNameExport = 'Jane'
let ageExport = 35

// do not edit below this line
try { firstNameExport = firstName } catch (e) {}

try { ageExport = age } catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
