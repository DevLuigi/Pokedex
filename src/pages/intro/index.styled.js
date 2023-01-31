import styled from "styled-components";

const Container = styled.div`

  display: flex; 
  flex-direction: column;
  position: relative;
  
  align-items: center;
  justify-content: space-around;
  
  background: url('/assets/images/background.png');
  background-size: cover;

  height: 100vh;

  animation: ${props => props.animation === true ? 'animateBackground 1s ease-in-out' : ""};
  
  cursor: default;

  @keyframes animateBackground {
    0% {
      background: #fff;
    }

    50% {
      background: #000;
    }

    100% {
      background: #fff;
    }
  }

  .display-none {
    display: none;
  }

  .title {
    width: 30em;
  }

  @keyframes animate {
    0% {
      opacity: 0; 
    }

    50% {
      opacity: 1; 
    }

    100% {
      opacity: 0; 
    }
  }

  .text {
    font-family: pokemon;
    font-size: 1.3em;
    color: #fff;
    text-shadow: 3px 3px black;

    opacity: 1;
    animation: animate 2s linear infinite;

    position: absolute;
    bottom: 7em;

    cursor: pointer;
  }

  .snorlax > img {
    position: absolute;
    right: 10em;
    bottom: 1em;

    width: 17em;
  }

  .footer {
    font-family: pokemon;
    font-size: 1.3em;
    color: #fff;
    text-shadow: 3px 3px black;

    position: absolute;
    bottom: 1em;
  }


  @media (max-width: 1200px) {
      .title {
        width: 15em;
        margin-bottom: 10em;
      }

      .snorlax {
        display: none;
      }

      .footer {
        font-size: .7em;
      }
  }
`

export { Container }
