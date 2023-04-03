const API_KEY = `5f57383b20976f0b48d856271d485fbc`;
// GET movie by id
// https://api.themoviedb.org/3/movie/550?api_key=230c542223655shjhdhdh
// https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false

// GET list by title
const dataSearch= await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
);
console.log(dataSearch.data);

// GET list more popular
const morePopular= await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
);
console.log(morePopular.data);

// GET top rated
const topRated= await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&query=ET&language=en-US&page=1"
);
console.log(topRated.data);