const API='6bea443a9556b09e135dc3e19d0ffbbc';

const requests={
    fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;