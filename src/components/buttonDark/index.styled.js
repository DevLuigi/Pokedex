import styled from "styled-components";

const Button = styled.button`
  font-family: pokemon;
  color: #fff;
  
  height: 3em;
  width: 45%;
  
  cursor: pointer;

  background-color: #373737;
  box-shadow: -1px 2px 0 #222, -3px 5px 0 #000;

  &:active {
    box-shadow: inset -3px 3px 0 #000;
  }
`

export { Button }