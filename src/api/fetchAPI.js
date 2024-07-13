import axios from "axios";
import MoviesPage from "pages/MoviesPage/MoviesPage";

const API_KEY = '3ea9e05bf615fb8d96f57aa463f7f68d';
const BASE_URL = 'https://api.themoviedb.org/3';


// get Trending list (/)
// https://api.themoviedb.org/3/trending/all/day

export const getTrending = async() => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}   

// search for movies (/movies)
// https://api.themoviedb.org/3/search/movie
export const searchMovieByKeyword = async(query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&${query}`);
    return response.data;
}   

// get movie details (/movies/:movieID)
// https://api.themoviedb.org/3/movie/${movie_id}

// get movie credits (/movies/:movieID/cast)
// https://api.themoviedb.org/3/movie/{movie_id}/credits

// get movie reviews (/movies/:movieID/reviews)
// https://api.themoviedb.org/3/movie/${movie_id}/reviews