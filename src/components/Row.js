import React, { useEffect, useState } from 'react'
import './Row.css'
import  axios  from './Axios';

function Row({title,fetchURL,isLargeRow}) {
    const [movies,setmovies]=useState([]);

    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(fetchURL);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();
    },[fetchURL])
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="rowimgs">
      {movies.map((movie)=>(
          <img key={movie.id} className={`rowimg ${isLargeRow && 'rowimglarge'}`} src={`https:///image.tmdb.org/t/p/original/${isLargeRow ?movie.poster_path :movie.backdrop_path}`} alt="" />
          ))}
          </div>
    </div>
  )
}

export default Row
