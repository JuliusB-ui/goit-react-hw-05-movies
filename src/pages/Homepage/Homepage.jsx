import MovieList from 'components/MovieList/MovieList'
import { getTrending } from 'api/fetchAPI';
import React, { useEffect } from 'react'

const Homepage = () => {

  useEffect(()=>{
    const fetchData = async() => {
      const data= await getTrending();
      console.log(data);
    }
    fetchData();
  },[])


  return (
    <main>
      <h1>Trending Movies Today</h1>
      <MovieList/>
    </main>
  )
}

export default Homepage 