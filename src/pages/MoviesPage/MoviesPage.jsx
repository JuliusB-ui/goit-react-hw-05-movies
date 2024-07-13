import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'api/fetchAPI';


const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  }

  useEffect(() => {
    const search = async () => {
      try {
        const movies = await searchMovie(movieName);
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
      {searchResults.length !== 0 && <MovieList movies={searchResults}/>}
    </main>
  )
}

export default MoviesPage