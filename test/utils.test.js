import { secondsToHHMM, getValueOrNA } from "../javascript/utils";

describe(secondsToHHMM, () => {
    console.error = jest.fn()
    it("should return time in the format HH:MM when a number parameter is received",  () => {
        const seconds = 4740
        const result = secondsToHHMM(seconds)
        const expectedResult = "01:19"
        expect(result).toEqual(expectedResult)
    })

    it("should log an error to the console when it receives an unparseable parameter", () => {
        const seconds = "some text"
        secondsToHHMM(seconds)
        const expectedError = new Error(`it was not possible to parse the value ${seconds} of type string`)
        expect(console.error).toHaveBeenCalledWith(expectedError)
    })
})

describe(getValueOrNA, () => {
    it("should return the value of the received parameter if it has a truthy value", () => {
        const value1 = "something"
        const result1 = getValueOrNA(value1)
        expect(result1).toEqual(value1)
        
        const value2 = 123
        const result2 = getValueOrNA(value2)
        expect(result2).toEqual(value2)
    })

    it("should return the string 'N/A' if the value of the received parameter is falsy", () => {
        const value1 = undefined
        const result1 = getValueOrNA(value1)
        expect(result1).toEqual("N/A")

        const value2 = null
        const result2 = getValueOrNA(value2)
        expect(result2).toEqual("N/A")
    })
})