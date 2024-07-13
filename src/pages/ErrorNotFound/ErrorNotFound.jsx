import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ErrorNotFound = () => {
  const location=useLocation();
  return (
    <div>
      <button>
        <Link to={location.state?.from || '/'}>GO BACK
        </Link>
      </button>
      ErrorNotFound
      </div>
  )
}

export default ErrorNotFound