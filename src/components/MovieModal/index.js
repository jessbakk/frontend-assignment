import React from 'react'
import { Background, ModalWrapper, ModalImg, ModelContent, ModalContent } from './MovieModal.styles'

const MovieModal = ({showModal, image, title, date, overview, score, count}) => {

    return (
        <>
        {showModal ? 
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={image} alt='movie-thumb' />
                    <ModalContent>
                        <h3>{title}</h3>
                        <p>{overview}</p>
                        <p>Rating: {score}/10</p>
                        <p>Out of {count} total votes</p>
                    </ModalContent>
                </ModalWrapper>
            </Background>    
        :
        null
        }
        </>
    )

}

export default MovieModal