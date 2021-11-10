const API_URL = process.env.REACT_APP_API_DOMAIN
const API_KEY = process.env.REACT_APP_API_KEY

const SEARCH_BASE_URL = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=`
const NOW_PLAYING_BASE_URL = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`
const POPULAR_BASE_URL = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`

const IMAGE_BASE_URL = process.env.REACT_APP_API_BASE_IMAGE_URL
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780'

export  {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    NOW_PLAYING_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
}