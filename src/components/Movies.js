import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Grid from './Grid'
import Thumb from './Thumb'
import SearchBar from './SearchBar'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {

        searchTerm ?
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${searchTerm}`)
        .then( resp => {
            setMovies( resp.data.results )
            console.log(resp.data.results) 
        })
        .catch( resp => console.log(resp) )
        :
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
            .then( resp => {
                setMovies( resp.data.results )
                console.log(resp.data.results) 
            })
            .catch( resp => console.log(resp) )
        
    }, [searchTerm])

    console.log(movies)

    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Most Recent Movies'}>
                {movies.map( movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={process.env.REACT_APP_API_BASE_IMAGE_URL + movie.poster_path}
                        title={movie.title}
                        movieId={movie.id}
                        score={movie.vote_average}
                    />
                    )
                )}   
            </Grid>
        </>
    )
}

export default Movies