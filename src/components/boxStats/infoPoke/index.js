import React from "react";
import Container from "./index.styled";




export default function InfoPoke(props) {
  const validation = props.pokedexOn === true && props.value ? props.value : '***'

  return(
    <Container>
      <div> {props.field}: </div>
      <div title={validation}> {validation} </div> 
    </Container>
  )
}