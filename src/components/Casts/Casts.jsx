import React, { useEffect, useState } from 'react'
import { getCasts } from 'api/fetchAPI';
import { useParams } from 'react-router-dom';
import noimageplaceholder from 'components/images/image-not-found-icon.png';
import css from './Casts.module.css';


const Casts = () => {
  const [castList,setCastList]=useState([]);
  const {movieID} = useParams();
  
  useEffect(()=> {
    const getCast = async() =>{
    try {
      const castList = await getCasts(movieID);
    setCastList(castList);
    } catch (error) {
      console.error(error)
    }
    }
    getCast();
  }, [movieID])

  return (
  <>
    {castList.length !==0 ?
    <div>
      <h4>Movie Casts</h4>
      <ul>
        {castList.map(cast => (
          <li key={cast.cast_id}>
            <img src={cast.profile_path?`https://image.tmdb.org/t/p/w500${cast.profile_path}`:`${noimageplaceholder}`} className={css.poster} alt={cast.name}/>
            <h5>{cast.name} </h5>
            <p>{cast.character!==''? `as ${cast.character}`: ''}</p>
          </li>
        ))}
        </ul>
      </div>: <div>we didn't find the casts of this movie.</div>}
  </>
  )
}

export default Casts