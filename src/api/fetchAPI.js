import axios from "axios";

const API_KEY = '3ea9e05bf615fb8d96f57aa463f7f68d';
const BASE_URL = 'https://api.themoviedb.org/3';


// get Trending list (/)
// https://api.themoviedb.org/3/trending/all/day

export const getTrending = async () => {
    const trendingMovies = axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`);
    return await trendingMovies;
}   

// search for movies (/movies)
// https://api.themoviedb.org/3/search/movie

// get movie details (/movies/:movieID)
// https://api.themoviedb.org/3/movie/${movie_id}

// get movie credits (/movies/:movieID/cast)
// https://api.themoviedb.org/3/movie/{movie_id}/credits

// get movie reviews (/movies/:movieID/reviews)
// https://api.themoviedb.org/3/movie/${movie_id}/reviews