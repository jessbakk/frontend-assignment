import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Grid from './Grid'
import Thumb from './Thumb'

const Movies = () => {

    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
            .then( resp => {
                setNowPlaying( resp.data.results )
                console.log(resp.data.results) 
            })
            .catch( resp => console.log(resp) )
        
    }, [])



    return (
        <>
            <div>Now Playing</div>
            <Grid>
                {nowPlaying.map( movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={process.env.REACT_APP_API_BASE_IMAGE_URL + movie.poster_path}
                        movieId={movie.id}
                    />
                    )
                )}   
            </Grid>
        </>
    )
}

export default Movies