import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  height: 2em;
  width: 8em;
  margin: 1em 2em;
  
  
  div {
    height: 2em;
    width: 2em;
    background-color: unset;
    border-radius: 50%;
    box-shadow: -2px 1px 0 #000;
    opacity: .5;
  }

  #red {
    background-color: #E7021A;
  }

  #yellow {
    background-color: #ebf45f;
  }

  #green {
    background-color: #87e930;
  }

  @media (max-width: 1280px) {
    height: 5em;
    width: 11em;
    margin: 0em 2em;

    div {
      height: 2.5em;
      width: 2.5em;
    }
  }

  @media (min-width: 1440px) {
    height: 4em;
    margin: 0em 2em;
  }

  @media (min-width: 1920px) {
    width: 10em;
    height: 4em;
    margin: 0em 2.5em;
    
    div {
      height: 2.5em;
      width: 2.5em;
    }
  }
`

export default Container 