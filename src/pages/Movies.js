import React from "react";
import MovieForm from '../components/MovieForm';
import { useState } from 'react';
import Movie from "../components/Movie";

const Movies = () => {
         const [movies,setMovies] = useState([])
             const removeMovie =(id)=>{
          setMovies(movies.filter(movie=>{
             return movie.id !== id
              }))
            }

    
    const renderMovies = movies.length ? movies.map(movie=>{
        return(
          <Movie movie={movie}
           key={movie.id}
           removeMovie = {removeMovie} 
           />
        )
      }) : '추가된 영화가 없습니다.'
      
       const addMovie =((movie)=>{
      
         setMovies([
           ...movies,
           movie
        ])
      
       })
  return(
      <>
        <h1 className='h1'>Movie List</h1>
        <MovieForm  addMovie ={addMovie}/>
        {renderMovies}
    </>
  )
}

export default Movies
