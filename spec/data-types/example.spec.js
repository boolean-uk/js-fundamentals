const { a, b, c, d } = require('../../src/data-types/example')

describe('Example', () => {

  it('upperCaseHello is HELLO', (Hello) => {
    expect(a).toEqual('HELLO')
  })

  it('secondCharacterOfDog is o', (dog) => {
    expect(b).toEqual('o')
  })

  it('numberOfVowels is 5', (aeiou) => {
    expect(c).toEqual(5)
  })

  it('numOneMultipliedByNumTwo is 200', (1 * 2) => {
    expect(d).toEqual(200)
  })

})
