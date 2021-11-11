import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  animation: animateThumb 0.5s;
  z-index: 2;
  position: relative;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const Wrapper = styled.div`
  color: var(--white);
  background: var(--white);
  border-radius: 5px;
  text-align: center;
  box-shadow: 1px 2px 8px 2px #0000001A;
  z-index: 1;
  margin: 0 0 0 25px;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    color: var(--darkGrey);
    font-size: .75rem;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
    align: center;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: white;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
    z-index: 3;
    position: relative;
    top: -290px;
    left: 10px;
    border: solid black 0.5px;

  }
`


