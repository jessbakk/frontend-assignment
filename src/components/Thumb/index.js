import React from 'react'

//styles
import { Image, Wrapper } from './Thumb.styles' 

const Thumb = ({ movieId, image, title, score, count, overview, date, toggleClick }) => {
    const movieData = {
        id: movieId, 
        imgsrc: image,
        title: title, 
        overview: overview,
        voteAvg: score,
        voteCount: count,
        releaseDate: date
    }

    return (

        <Wrapper>
            <Image src={image} alt='movie-thumb' onClick={() => toggleClick(movieData)}/>
            <div className="score">{score}</div>
            <p>{title}</p>
        </Wrapper>
    )
            
}

export default Thumb