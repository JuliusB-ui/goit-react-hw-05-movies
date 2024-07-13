import { getMovieDetails } from 'api/fetchAPI';
import React, { useEffect, useState, useRef} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import noimageplaceholder from 'components/images/image-not-found-icon.png';


const MovieDetailsPage = () => {

  const {movieID} = useParams();
  const [details, setDetails]=useState('');
  const location=useLocation()
  const backLink=useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async() => {
      const movie= await getMovieDetails(movieID);
      setDetails(movie);
    }
    movieDetails();
  }, [movieID])
  
  const averageScore=Math.round(details.vote_average * 10)
  const genres=details.genres?.map(genre => genre.name).join(', ')
  console.log(details)

  return (
    <div>
      <Link to={backLink.current}>Back</Link>
      <img src={
        details.poster_path?
        `https://image.tmdb.org/t/p/w500${details.poster_path}`: `${noimageplaceholder}`} alt={details.title}/>
      <h1>{details.title}</h1>

      <p>User Score: <b>{averageScore}%</b></p>

      <h3>Overview</h3>
      <p>{details.overview}</p>

      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        <Link to="casts" state={{ from: location }}>Casts</Link>
        <Link to="reviews" state={{ from: location }}>Reviews</Link>
      </div>
    </div>
  )
}

export default MovieDetailsPage