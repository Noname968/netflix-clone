import React, { useState,useEffect } from 'react'
import'./Banner.css'
import requests from './Request.js'
import  axios  from './Axios';

function Banner() {
  const [movie,setmovie]=useState([]);

  useEffect(()=>{
    async function fetchdata(){
      const request=await axios.get(requests.fetchNetflixOriginals);
      setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    }
    fetchdata();
  },[])
  console.log(movie)
  return (
    <div className='banner' style={{
      backgroundSize:"cover",
      backgroundImage:`url('https:///image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition:"center center"
      }}>
        <div className="bannercontent">
          <h1 className="bannertitle">{movie?.name || movie?.title || movie?.original_name}</h1>
          <div className="bannerbtn">
            <button className='Btnsbanner'>Play</button>
            <button className='Btnsbanner'>More Info</button>
          </div>
          <h1 className="bannerdesc">{movie.overview?.slice(0,180)}</h1>
        </div>
    </div>
  )
}
export default Banner
