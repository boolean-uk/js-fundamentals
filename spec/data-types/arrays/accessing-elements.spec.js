const answers = require('../../../src/data-types/arrays/accessing-elements.js')

describe("Arrays accessing:", () => {
  it("names equals Bob, Jane, Joanna", () => {
    expect(answers.a).toEqual(["Bob", "Jane", "Joanna"])
  })

  it("fourthCity is Delhi", () => {
    expect(answers.b).toEqual(answers._c.find(city => city.location === "Delhi"))
  })

  it("firstCity is London", () => {
    expect(answers.c).toEqual(answers._c.find(city => city.location === "London"))
  })

  it("lengthOfCitiesArray is 5", () => {
    expect(answers.d).toEqual(5)
  })

})
