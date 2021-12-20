//
//
//
// TODO: Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = 'Jane'
try { firstNameExport = firstName } catch (e) {}

let ageExport = 35
try { ageExport = age } catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
