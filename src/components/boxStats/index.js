import React from "react";
import Container from "./index.styled";





export default function BoxStats(props) {
  return(
    <Container {...props}>
        <div className="titulo">  
            <img src="/assets/icones/pokebola.png" alt="img-pokebola"/>
            <div> {props.title} </div>
        </div>
        <div className="info">
          {props.children}
        </div>
    </Container>
  )
}