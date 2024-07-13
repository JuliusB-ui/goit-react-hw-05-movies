import React, { useState } from 'react';


const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm