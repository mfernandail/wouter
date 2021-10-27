import React, { useState } from 'react';
import { useLocation, useRoute } from 'wouter';

export const Home = () => {
  const [input, setInput] = useState('');
  const [path, setLocation] = useLocation();

  const [match, params] = useRoute("/search/:input");
  let querySearch = ''

  if(params !== null) {
    querySearch = params.input || '';    
  }else{
    querySearch = '';    
  }

  console.log(querySearch)

  const handleChange = e => {
    setInput(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setLocation(`/search/${input}`)
  }
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
      </form>

      <h1>{querySearch}</h1>
    </div>
  )
}
