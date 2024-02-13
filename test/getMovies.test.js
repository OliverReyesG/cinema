import { getMovies } from "../javascript/getMovies";

describe(getMovies, () => {

    console.error = jest.fn()
    it("should fetch a list of movies", async () => {
        const mockResponse = {
            text: () =>
                Promise.resolve('{"results": [{"id": 1, "title": "movie 1"}, {"id": 2, "title": "movie 2"}]}')
        }
        global.fetch = jest.fn().mockResolvedValue(mockResponse)
        const expectedResponse = [{id: 1, title: "movie 1"}, {id: 2, title: "movie 2"}]
        const result = await getMovies()
        expect(result).toEqual(expectedResponse)
    })

    it("should log an error to the console when the request fails", async () => {
        const expectedError = new Error("failed to fetch")
        global.fetch = jest.fn().mockRejectedValue(expectedError)
        await getMovies()
        expect(console.error).toHaveBeenCalledWith(expectedError)
    })
})