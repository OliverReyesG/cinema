import { getMovie } from "../javascript/getMovie";

describe(getMovie, () => {
    console.log = jest.fn()
    const movieId = "tt0055254";
    it("should fetch a movie by id", async () => {
        const mockResponse = {
            ok: true,
            json: () =>
                Promise.resolve({
                    results: { id: "test-id", title: "test-title" },
                }),
        };
        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        const result = await getMovie(movieId);
        expect(result).toEqual({ id: "test-id", title: "test-title" });
    });

    it("should log an error when response is not ok", async () => {
        const mockResponse = {
            ok: false,
            json: () =>
                Promise.resolve({
                    results: { id: "test-id", title: "test-title" },
                }),
        };
        const expectedErrorMessage = "Could not fetch resource"
        global.fetch = jest.fn().mockResolvedValue(mockResponse);
        await getMovie(movieId);
        expect(console.log).toHaveBeenCalledWith(new Error(expectedErrorMessage))
    })

    it("should log an error when the request fails", async () => {
        const expectedErrorMessage = "failed to fetch"
        global.fetch = jest.fn().mockRejectedValue(new Error(expectedErrorMessage))
        await getMovie(movieId)
        expect(console.log).toHaveBeenCalledWith(new Error(expectedErrorMessage))
    })
});
