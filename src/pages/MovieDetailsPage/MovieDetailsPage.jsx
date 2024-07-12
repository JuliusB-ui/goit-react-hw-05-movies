import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const MovieDetailsPage = () => {
  return (
    <div>MovieDetailsPage

        <Link to="/casts">Casts</Link>
        <Link to="/reviews">Reviews</Link>
        <Outlet/>
    </div>
  )
}
