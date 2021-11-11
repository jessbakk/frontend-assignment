import React from 'react'
//components
import MovieModal from '../MovieModal'

//styles
import { Image, Wrapper } from './Thumb.styles' 

const Thumb = ({ image, title, score }) => (

    <Wrapper>
        <Image src={image} alt='movie-thumb' />
        <div className="score">{score}</div>
        <p>{title}</p>
    </Wrapper>
            
)

export default Thumb