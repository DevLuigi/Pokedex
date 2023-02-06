import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  height: 5%;
  width: 35%;
  margin: 7%;

  div {
    height: 100%;
    width: 25%;
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
    height: 2em;
    width: 9em;
    margin: 1.5em 2em;
  }

  @media (min-width: 1440px) {
    height: 2em;
    margin: 1em 2em;
  }

  @media (min-width: 1920px) {
    width: 10em;
    height: 2.5em;
    margin: 1.6em 2.5em;
  }
`

export default Container 