import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByKeyword } from 'api/fetchAPI';


const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query');
  const updateQueryString = query => {
    const nextParams = query !== ''? {query}: {};
    setSearchParams(nextParams);
  }

  useEffect(() => {
    const search = async () => {
      try {
        console.log(movieName);
        const movies = await searchMovieByKeyword(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, [movieName]);


  return (
    <main>
      <h1>Movies</h1>
      <SearchForm onSubmit={updateQueryString}/>
      <MovieList/>
    </main>
  )
}

export default MoviesPage