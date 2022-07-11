const { answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    answerSix,
    answerSeven,
    MONTH,
    answerEight } = require('../../src/conditional-flow/string-conditions')

describe("answerOne", () => {
    it("should be true", () => {
        expect(answerOne).toBe(true)
    })
})

describe("answerTwo", () => {
    it("should be true", () => {
        expect(answerTwo).toBe(true)
    })
})

describe("answerThree", () => {
    it("should be true", () => {
        expect(answerThree).toBe(true)
    })
})

describe("answerFour", () => {
    it("should be true", () => {
        expect(answerFour).toBe(true)
    })
})

describe("answerFive", () => {
    it("should be false", () => {
        expect(answerFive).toBe(false)
    })
})

describe("answerSix", () => {
    it("should be 'y'", () => {
        expect(answerSix).toBe('y')
    })
})

describe("answerSeven", () => {
    it("should be 'le'", () => {
        expect(answerSeven).toBe('le')
    })
})

describe("answerEight", () => {
    it("should be 'Winter'", () => {
        if (['December', 'January', 'February'].includes(MONTH)) {
            expect(answerEight).toEqual('Winter')
        }
    })

    it("should be 'Autumn'", () => {
        if (['September', 'October', 'November'].includes(MONTH)) {
            expect(answerEight).toEqual('Autumn')
        }
    })

    it("should be 'Summer'", () => {
        if (['June', 'July', 'August'].includes(MONTH)) {
            expect(answerEight).toEqual('Summer')
        }
    })

    it("should be 'Spring'", () => {
        if (['March', 'April', 'May'].includes(MONTH)) {
            expect(answerEight).toEqual('Spring')
        }
    })
})
