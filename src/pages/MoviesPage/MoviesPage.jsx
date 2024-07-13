import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query');
  const updateQueryString = query => {
    const nextParams=query !== ''? {query}: {};
    setSearchParams(nextParams);
  }

  return (
    <main>
      <SearchForm value={movieName} onSubmit={updateQueryString}/>
      <MovieList/>
    </main>
  )
}

export default MoviesPage