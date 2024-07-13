import MovieList from 'components/MovieList/MovieList'
import { getTrending } from 'api/fetchAPI';
import React, { useState,useEffect } from 'react'

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      const movies= await getTrending();
      setTrendingMovies(movies);
    }
    fetchData();
  },[])


  return (
    <main>
      <h1>Trending Movies Today</h1>
      <MovieList movies={trendingMovies}/>
    </main>
  )
}

export default Homepage 