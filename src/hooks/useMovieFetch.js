import axios from 'axios'

const getNowPlaying = async () => {

    const resp = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`
        )
    return resp
}

export {
    getNowPlaying
}