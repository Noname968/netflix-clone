import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import requests from '../components/Request'
import Row from '../components/Row'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} /> 
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default Home
