import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0em;

  width: 100%;
  
  div {
    font-weight: 400;
  }

  div:nth-child(1) {
    margin-right: .5em;
  }

  div:nth-child(2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default Container