const API_KEY = '9d234121787d4da8e856e497cd1f12b8';

const REQUESTS = {
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending : `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies : `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantries : `/discover/tv?api_key=${API_KEY}&with_genres=99`,

};

export default REQUESTS;