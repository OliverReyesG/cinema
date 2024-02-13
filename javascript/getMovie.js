import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

export const getMovie = async (movieId) => {
    try {
        const movieURL = API_MOVIE_ID_URL.replace("{id}", movieId);
        const response = await fetch(movieURL, OPTIONS);

        if (!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        return data.results
    }
    catch(error) {
        console.log(error);
    }
}