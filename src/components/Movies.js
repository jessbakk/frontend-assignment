import React, { useState, useEffect } from 'react'
import axios from 'axios'
//components
import Grid from './Grid'
import Thumb from './Thumb'
import SearchBar from './SearchBar'
import MovieModal from './MovieModal'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] =useState({
        id: "",
        imgsrc: "",
        title: "",
        overview: "",
        vote_average: "",
        vote_count: "",
        release_date: ""
    })

    useEffect(() => {

        searchTerm ?
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${searchTerm}`)
        .then( resp => {
            setMovies( resp.data.results )
        })
        .catch( resp => console.log(resp) )
        :
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
            .then( resp => {
                setMovies( resp.data.results )
            })
            .catch( resp => console.log(resp) )
        
    }, [searchTerm])

    const toggleClick = (moviedata) => {
        setShowModal(prev => !prev)

        setMovie({
            id: moviedata.id,
            imgsrc: moviedata.imgsrc,
            title: moviedata.title,
            overview: moviedata.overview,
            vote_average: moviedata.voteAvg,
            vote_count: moviedata.voteCount,
            release_date: moviedata.releaseDate
        })
        
    }

    return (
        <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <MovieModal 
            showModal={showModal}
            image={movie.imgsrc}
            title={movie.title}
            date={movie.release_date}
            overview={movie.overview}
            score={movie.vote_average}
            count={movie.vote_count}

            />    
            <Grid header={searchTerm ? 'Search Result' : 'Most Recent Movies'}>
                {movies.map( movie => (
                    <Thumb 
                    key={movie.id}
                    image={process.env.REACT_APP_API_BASE_IMAGE_URL + movie.poster_path}
                    title={movie.title}
                    movieId={movie.id}
                    score={movie.vote_average}
                    count={movie.vote_count}
                    overview={movie.overview}
                    date={movie.release_date}
                    toggleClick={toggleClick}
                    />
                    
                    )
                )}   
            </Grid>
        </>
    )
}

export default Movies