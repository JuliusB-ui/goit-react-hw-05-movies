import React, { useEffect, useState } from 'react'
import { getReviews } from 'api/fetchAPI';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsList,setReviewsList]=useState([]);
  const {movieID} = useParams();
  
  useEffect(()=> {
    const reviews = async() =>{
    try {
      const response = await getReviews(movieID);
      setReviewsList(response);
    } catch (error) {
      console.error(error)
    }
    }
    reviews();
  }, [movieID])
  
  return (
    <>
    {reviewsList.length !== 0?
    <div> 
      <h4>Reviews</h4>
      <ul>
        {reviewsList.map(review => (
          <li key={review.id}>
            <h5>{review.author}</h5>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div> :
    <div>There are no reviews for this movie.</div>
    }
    </>
  )
}

export default Reviews