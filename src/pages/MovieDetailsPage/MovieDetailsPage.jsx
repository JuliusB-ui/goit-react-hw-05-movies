import { getMovieDetails } from 'api/fetchAPI';
import React, { useEffect, useState, useRef, Suspense} from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import noimageplaceholder from 'components/images/image-not-found-icon.png';
import css from './MovieDetailsPage.module.css';
import defaultStyle from '../Homepage/Homepage.module.css';


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

  return (
    <main className={defaultStyle.mainPage}>
      <button><Link to={backLink.current}>Back</Link></button>
      <div className={css.details}><img src={
        details.poster_path?
        `https://image.tmdb.org/t/p/w500${details.poster_path}`: `${noimageplaceholder}`} width='240' height='auto' alt={details.title}/>
      
      <div>
      <h1>{details.title}</h1>

      <p>User Score: <b>{averageScore}%</b></p>

      <h3>Overview</h3>
      <p>{details.overview}</p>

      <h3>Genres</h3>
      <p>{genres}</p></div>
      </div>
      <h3>Other Information</h3>
      <div>
        <Link to="casts" state={{ from: location }}>Casts</Link>
        <Link to="reviews" state={{ from: location }}>Reviews</Link>
      </div>
        <Suspense fallback="Loading, please wait...">
      <Outlet/>
      </Suspense>
    </main>
  )
}

export default MovieDetailsPage